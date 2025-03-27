import React, { useState, useEffect } from 'react'

function ViewContact({ contact, onFavoriteChange }) {
    const [isFave, setIsFave] = useState(false);

    useEffect(() => {
        setIsFave(false);
    }, [contact])
    const addFave = (e) => {
        const checked = e.target.checked;
        setIsFave(checked);
        onFavoriteChange(contact.contact_id, checked);
    }

    if (!contact) {
        return null;
    }
    
    return (
        <>
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
            </label> <br/>
            
            <button>Delete Contact</button>
        </>
    )
}

export default ViewContact