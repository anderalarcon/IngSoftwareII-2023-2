import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import LandingPageWithFetch from '../../../src/app/semana6/fetching/page';

describe('LandingPageWithFetch', () => {
  it('fetches data and displays it correctly', async () => {
    // Mock the response from the API
    const mockData = {
      userId: 1,
      id: 2,
      title: 'Sample Post',
    };
  
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });
  
    // Render the component
    render(<LandingPageWithFetch />);
  
    // Wait for the component to finish fetching data
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  
    // Wait for the element to appear in the DOM
    await waitFor(() => {
      expect(screen.getByText('Post Data')).toBeInTheDocument();
      expect(screen.getByTestId('post-id')).toHaveTextContent('Post ID: 2');
      expect(screen.getByTestId('post-title')).toHaveTextContent('Sample Post');
    });
  });

  it('handles API errors gracefully', async () => {
    // Mock an error response from the API
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Network error'));

    // Render the component
    render(<LandingPageWithFetch />);

    // Wait for the component to handle the error
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    // Check if the error message is displayed
    await waitFor(() => {
      expect(screen.getByText('Error: Network error')).toBeInTheDocument();
    });
  });
});