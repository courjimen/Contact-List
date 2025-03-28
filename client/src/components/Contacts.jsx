import React, { useState, useEffect } from 'react'
import ViewContact from './ViewContact'
import CreateContact from './CreateContact';
import { FiEdit, FiStar } from 'react-icons/fi';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [clickedContact, setClickContact] = useState(null);
    const [createContact, setCreateContact] = useState(false);
    const [faves, setFaves] = useState([]);
		const [searchTerm, setSearchTerm] = useState('');
		

    useEffect(() => {
        fetch('http://localhost:3000/contacts')
            .then((res) => res.json())
            .then((data) => setContacts(data))
            .catch((err) => console.error('Error grabbing contacts: ', err));
    }, []);

		const handleUpdateContact = (updatedContact) => {
			setContacts(prevContacts =>
					prevContacts.map(contact =>
							contact.contact_id === updatedContact.contact_id ? updatedContact : contact
					)
			);
			setClickContact(updatedContact)
	};
    const handleViewContact = (contact) => {
        setClickContact(contact);
    }

    const handleAddContact = (newContact) => {
        setContacts([...contacts, newContact]);
        setCreateContact(false);
    }

    const handleFave = (contactId, isFave) => {
        if (!faves.some((fave) => fave.contact_id === contactId)) {
            const faveContact = contacts.find((contact) => contact.contact_id === contactId);
            if (faveContact) {
                setFaves([...faves, faveContact]);
                fetch(`http://localhost:3000/faves`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ fave_number: faveContact.phone })
                })
                    .catch(e => console.log(e))
            }
        } else {
            setFaves(faves.filter((fave) => fave.contact_id !== contactId));
            fetch(`http://localhost:3000/faves/${contacts.find((contact) => contact.contact_id === contactId).phone}`, {
                method: 'DELETE',
            })
                .catch(e => console.log(e))
        }
    };

    const handleDeleteContact = (contactId) => {
        setContacts(contacts.filter(contact => contact.contact_id !== contactId));
        setClickContact(null);
    }

		const filteredContacts = contacts.filter((contact) =>
			`${contact.first_name} ${contact.last_name} ${contact.phone}`
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
	);

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                    <h1>Contact List</h1>

                    <input
                        type="text"
                        placeholder="Search contacts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                    <ul>
                        {filteredContacts.map((contact) => (
                            <li key={contact.contact_id}
                                onClick={() => handleViewContact(contact)}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>

                                <FiEdit style={{ marginRight: '8px' }} />
                                {contact.first_name} {contact.last_name}: {contact.phone}
                            </li>
                        ))}
                    </ul>
										{clickedContact && (
                    <ViewContact contact={clickedContact} onFavoriteChange={handleFave} onDelete={handleDeleteContact} onUpdate={handleUpdateContact} />
										)}
										</div>

                <div>
                    <h1>Fave Contacts</h1>
                    <ul>
                        {faves.map((fave) => (
                            <li key={fave.contact_id}
                                style={{ display: 'flex', alignItems: 'center' }}>

                                <FiStar style={{ marginRight: '8px' }} />
                                {fave.first_name} {fave.last_name}: {fave.phone}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button onClick={() => setCreateContact(true)}>Add New Contact</button>

            {createContact && <CreateContact contactAdded={handleAddContact} />}


        </>
    );
}

export default Contacts