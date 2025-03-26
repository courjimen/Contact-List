import React, { useState, useEffect } from 'react'
import ViewContact from './ViewContact'
import CreateContact from './CreateContact';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [clickedContact, setClickContact] = useState(null);
    const [createContact, setCreateContact] = useState(false);
    useEffect(() => {
        fetch('http://localhost:3000/contacts')
            .then((res) => res.json())
            .then((data) => setContacts(data))
            .catch((err) => console.err('Error grabbing contacts: ', err));
    }, []);

    const handleViewContact = (contact) => {
        setClickContact(contact);
    }

    const handleAddContact = (newContact) => {
        setContacts([...contacts, newContact]);
        setCreateContact(false);
    }

    return (
        <>
            <h1>Contact List</h1>
            <ul>
                {contacts.map((contact) => (
                <li key={contact.contact_id} onClick={() => handleViewContact(contact)} style={ {cursor: 'pointer'} }> 
                    {contact.first_name} {contact.last_name}: {contact.phone}
                </li>
            ))}
            </ul>

            <ViewContact contact={clickedContact}/>

            <button onClick={() => setCreateContact(true)}>Add New Contact</button>

            {createContact && <CreateContact contactAdded={handleAddContact}/>}
            </>
    );
}

export default Contacts