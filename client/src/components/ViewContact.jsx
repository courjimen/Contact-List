import React, { useState, useEffect } from 'react'
import '../App.css'

function ViewContact({ contact, onFavoriteChange, onDelete, onUpdate}) {
    const [isFave, setIsFave] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#ffe4e1')
    const [editedContact, setEditedContact] = useState(contact);

    useEffect(() => {
        setIsFave(false);
        setBackgroundColor(getRandomLightColor());
        setEditedContact(contact);
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

    const handleSave = async () => {
        try {
            const res = await fetch(`http://localhost:3000/contacts/${contact.contact_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedContact),
            });

            if (res.ok) {
                onUpdate(editedContact); // Call the onUpdate prop with updated data
                alert('Contact updated!');
            } else {
                console.error('Failed to update contact');
                alert('Failed to update contact');
            }
        } catch (err) {
            console.error('Error updating contact:', err);
            alert('Error updating contact. Try again');
        }
    };

    const handleInputChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    };

    if (!contact) {
        return null;
    }

    return (
        <div className='view-contact-container' style={{ backgroundColor }}>
            <h1>Contact Details</h1>
            <label htmlFor='firstName'>First Name:</label>
            <input
                name="first_name"
                value={editedContact.first_name}
                onChange={handleInputChange}
                placeholder="First Name"
            />
            <label htmlFor='firstName'>Last Name:</label>
            <input
                name="last_name"
                value={editedContact.last_name}
                onChange={handleInputChange}
                placeholder="Last Name"
            />
            <label htmlFor='firstName'>Number:</label>
            <input
                name="phone"
                value={editedContact.phone}
                onChange={handleInputChange}
                placeholder="Phone"
            />
            <label htmlFor='firstName'>Email:</label>
            <input
                name="email"
                value={editedContact.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <label htmlFor='firstName'>Notes:</label>
            <textarea
                name="notes"
                value={editedContact.notes}
                onChange={handleInputChange}
                placeholder="Notes"
            />

            {/* Add a star for fave and trashbin for delete */}
            <label>
                <input
                    checked={isFave}
                    onChange={addFave}
                    type='checkbox' />
                Add Favorite
            </label> <br />

            <button onClick={handleSave}>Save</button>

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