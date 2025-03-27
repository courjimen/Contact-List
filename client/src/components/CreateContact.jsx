import React, { useState } from 'react'
import ViewContact from './ViewContact';

function CreateContact({ contactAdded }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('Contact Added!')
    
        try {
            const res = await fetch('http://localhost:3000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    phone: phone,
                    email: email,
                    notes: notes
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
            }

            const newContact = await res.json();
            contactAdded(newContact);
            setFirstName('');
            setLastName('');
            setPhone('');
            setEmail('');
            setNotes('');
        } catch (err) {
            console.error('Error adding contact: ', err);
        }
    };

    return (
        <>
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={firstName}
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                    required />

                <input
                    type='text'
                    value={lastName}
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)} />

                <input
                    type='tel'
                    value={phone}
                    placeholder='Phone'
                    onChange={(e) => setPhone(e.target.value)}
                    required />

                <input
                    type='email'
                    value={email}
                    placeholder='text@email.com'
                    onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <br/>
                <textarea
                    value={notes}
                    placeholder='Enter notes'
                    onChange={(e) => setNotes(e.target.value)} />
            
            {/* Add a plus here to add */}
            <button type="submit">Add!</button>
            </form>
        </>
    )
}

export default CreateContact