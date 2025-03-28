import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CreateContact from '../components/CreateContact'; // Adjust the import path

describe('CreateContact Component', () => {
  it('renders the form element', () => {
    render(<CreateContact />);

    // Assert that the form element is present
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
});