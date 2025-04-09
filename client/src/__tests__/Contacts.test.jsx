import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contacts from '../components/Contacts.jsx'

describe('Shows Contact List', () => {
    it('renders the h1 Contact List header', () => {
        render(<Contacts />)
        const contactList = screen.getByRole('heading', {name: /contact list/i, level: 1 })
        expect(contactList).toBeInTheDocument()
    })
})