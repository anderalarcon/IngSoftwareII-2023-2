// Button.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../../../src/app/semana6/page';

describe('Landing Page', () => {
  test('Should render correctly', () => {
    render(<LandingPage />);
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('Landing Page');
  });

  test('Should have a disabled button', () => {
    render(<LandingPage />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  test('Should have a p tag with className "blue"', () => {
    render(<LandingPage />);
    const pElement = screen.getByTestId('paragraph');
    expect(pElement).toHaveClass('blue');
  });
});