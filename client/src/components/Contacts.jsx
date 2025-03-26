import React, { useState, useEffect } from 'react'
import ViewContact from './ViewContact'

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [clickedContact, setClickContact] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/contacts')
            .then((res) => res.json())
            .then((data) => setContacts(data))
            .catch((err) => console.err('Error grabbing contacts: ', err));
    }, []);

    const handleViewContact = (contact) => {
        setClickContact(contact);
    }

    return (
        <>
            <h1>Contact List</h1>
            <ul>
                {contacts.map((contact) => (
                <li key={contact.contact_id} onClick={() => handleViewContact(contact)} style={ {cursor: 'pointer'} }> 
                    {contact.first_name} {contact.last_name} {contact.phone} {contact.email} {contact.notes}
                </li>
            ))}
            </ul>

            <ViewContact contact={clickedContact}/>

            <button>Add new contact</button>
            </>
    )
}

export default Contacts