import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToastNotification from './ToastNotification';

describe('<ToastNotification />', () => {
  test('it should mount', () => {
    render(<ToastNotification />);
    
    const toastNotification = screen.getByTestId('ToastNotification');

    expect(toastNotification).toBeInTheDocument();
  });
});