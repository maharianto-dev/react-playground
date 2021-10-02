import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestCollection1 from './TestCollection1';

describe('<TestCollection1 />', () => {
  test('it should mount', () => {
    render(<TestCollection1 />);
    
    const testCollection1 = screen.getByTestId('TestCollection1');

    expect(testCollection1).toBeInTheDocument();
  });
});