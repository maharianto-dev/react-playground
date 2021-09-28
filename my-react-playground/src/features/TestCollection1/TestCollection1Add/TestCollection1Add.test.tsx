import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestCollection1Add from './TestCollection1Add';

describe('<TestCollection1Add />', () => {
  test('it should mount', () => {
    render(<TestCollection1Add />);
    
    const testCollection1Add = screen.getByTestId('TestCollection1Add');

    expect(testCollection1Add).toBeInTheDocument();
  });
});