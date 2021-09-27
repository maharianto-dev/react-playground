import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Others from './Others';

describe('<Others />', () => {
  test('it should mount', () => {
    render(<Others />);
    
    const others = screen.getByTestId('Others');

    expect(others).toBeInTheDocument();
  });
});