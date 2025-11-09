import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HashRouter } from 'react-router-dom';
import App from './App';

describe('App navigation', () => {
  test('navigates to event page when "View Details" is clicked', async () => {
    render(
      <HashRouter>
        <App />
      </HashRouter>
    );

    const viewDetailsButtons = await screen.findAllByText('View Details');
    await userEvent.click(viewDetailsButtons[0]);

    expect(await screen.findByText('Event Description')).toBeInTheDocument();
  });

  test('navigates to sections on the homepage when header links are clicked', async () => {
    render(
      <HashRouter>
        <App />
      </HashRouter>
    );

    await userEvent.click(screen.getByText('About Us'));
    await waitFor(() => expect(window.location.hash).toBe('#/#about'));

    await userEvent.click(screen.getByText('Events'));
    await waitFor(() => expect(window.location.hash).toBe('#/#events'));

    await userEvent.click(screen.getByText('Gallery'));
    await waitFor(() => expect(window.location.hash).toBe('#/#gallery'));

    await userEvent.click(screen.getByText('Contact'));
    await waitFor(() => expect(window.location.hash).toBe('#/#contact'));
  });
});
