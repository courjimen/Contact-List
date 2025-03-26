import React, { useState, useEffect } from 'react'

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/contacts')
            .then((res) => res.json())
            .then((data) => setContacts(data))
            .catch((err) => console.err('Error grabbing contacts: ', err));
    }, []);

    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map((contact) => (
                <li key={contact.contact_id}> 
                    {contact.first_name} {contact.last_name} {contact.phone} {contact.email} {contact.notes}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Contacts