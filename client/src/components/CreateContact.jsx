import React, { useState } from 'react'

function CreateContact({ contactAdded }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/^\d{3}-?\d{3}-?\d{4}$/.test(phone)) {
            setPhoneError('Phone number must be in the format XXX-XXX-XXXX or XXXXXXXXXX.');
            return;
        }

        setPhoneError('');

        

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

            if (!res.ok) {
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
        alert('Contact Added!')
    };

    return (
        <>
        <div className='add-contact-form'>
            <h1>Add Contact</h1>
            <form role='form' onSubmit={handleSubmit} className='contact-form'>
                <input
                    type='text'
                    value={firstName}
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                    className='contact-input'
                    />

                <input
                    type='text'
                    value={lastName}
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)} 
                    className='contact-input'
                    />


                <input
                    type='tel'
                    value={phone}
                    placeholder='XXX-XXX-XXXX'
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                    className='contact-input' 
                    />
                {phoneError && <p className="phone-error">{phoneError}</p>}

                <input
                    type='email'
                    value={email}
                    placeholder='text@email.com'
                    onChange={(e) => setEmail(e.target.value)} 
                    className='contact-input'
                    />

                <br />
                <br />
                <textarea
                    value={notes}
                    placeholder='Enter notes'
                    onChange={(e) => setNotes(e.target.value)} 
                    className='contact-textarea'
                    />

                {/* Add a plus here to add */}
                <button type="submit" className='contact-submit'>Add!</button>
            </form>
            </div>
        </>
    )
}

export default CreateContact