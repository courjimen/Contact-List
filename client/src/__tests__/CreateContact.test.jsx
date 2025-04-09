import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CreateContact from '../components/CreateContact.jsx';


describe('CreateContact Component', () => {
  it('renders the form element', () => {
    render(<CreateContact />);

    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
});