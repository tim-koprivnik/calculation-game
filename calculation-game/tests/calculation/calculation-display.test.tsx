import React from 'react';
import { screen } from '@testing-library/react';
import CalculationDisplay from '../../components/calculation/calculation-display';
import { renderWithReduxToolkit } from '../../utils/test-utils';

describe('calculation-display', () => {
  // Test to verify that the component renders a welcome message when there's no current calculation
  it('renders welcome message when there is no current calculation', () => {
    // Render the CalculationDisplay component within a Redux store context without any initial state
    renderWithReduxToolkit(<CalculationDisplay />);

    // Assert that the welcome message is part of the document, indicating correct initial render
    expect(
      screen.getByText('Welcome to the Calculation Game')
    ).toBeInTheDocument();
  });

  // Test to verify that the component renders the current calculation when it is provided in the Redux state
  it('renders the current calculation expression when present', () => {
    // Define an initial Redux state with a current calculation
    const initialState = {
      history: [],
      currentCalculation: { id: '1', expression: '1 + 1', correctAnswer: 2 }
    };

    // Render the CalculationDisplay component within a Redux store context, providing the initialState defined above
    renderWithReduxToolkit(<CalculationDisplay />, initialState);

    // Assert that the current calculation expression is rendered as part of the component
    expect(screen.getByText('1 + 1 = _')).toBeInTheDocument();
  });
});
