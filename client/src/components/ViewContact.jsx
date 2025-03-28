import React, { useState, useEffect } from 'react'
import '../App.css'

function ViewContact({ contact, onFavoriteChange, onDelete }) {
    const [isFave, setIsFave] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#ffe4e1')

    useEffect(() => {
        setIsFave(false);
        setBackgroundColor(getRandomLightColor());
    }, [contact]);

    const addFave = (e) => {
        const checked = e.target.checked;
        setIsFave(checked);
        onFavoriteChange(contact.contact_id, checked);
    }

    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:3000/contacts/${contact.contact_id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                onDelete(contact.contact_id);
                alert('Contact removed!')
            }

        } catch (err) {
            console.error('Error deleting contact:', err)
            alert('Error removing contact. Try again')
        }
    }

    if (!contact) {
        return null;
    }

    return (
        <div className='view-contact-container' style={{ backgroundColor }}>
            <h1>Contact Details</h1>
            <p>Name: {contact.first_name} {contact.last_name}</p>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>Notes: {contact.notes}</p>


            {/* Add a star for fave and trashbin for delete */}
            <label>
                <input
                    checked={isFave}
                    onChange={addFave}
                    type='checkbox' />
                Add Favorite
            </label> <br />

            <button onClick={handleDelete}>Delete Contact</button>
        </div>
    )
}

function getRandomLightColor() {
    const letters = 'BCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

export default ViewContact