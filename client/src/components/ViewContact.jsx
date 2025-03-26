import React from 'react'

function ViewContact({ contact }) {
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
    </>
  )
}

export default ViewContact