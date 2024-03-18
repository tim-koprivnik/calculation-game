import React from 'react';
import { screen } from '@testing-library/react';
import CalculationsHistory from '../../components/calculation/calculations-history';
import { CalculationsState } from '../../store/calculations/calculationsSlice';
import { renderWithReduxToolkit } from '../../utils/test-utils';

describe('calculations-history', () => {
  // Test to verify that the component renders correctly with an empty history
  it('renders no items when history is empty', () => {
    // Render the CalculationsHistory component within a Redux store context with an initial state where the history is empty
    renderWithReduxToolkit(<CalculationsHistory />, {
      history: [],
      currentCalculation: null
    });

    // Assert that the list is present in the document but contains no list items
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  // Test to verify that the component correctly renders the calculations history
  it('renders calculations history correctly', () => {
    // Define an initial state with some calculations in the history
    const initialState: CalculationsState = {
      history: [
        {
          id: '1',
          expression: '2 + 2',
          userAnswer: 4,
          correctAnswer: 4,
          isCorrect: true
        },
        {
          id: '2',
          expression: '10 + 7',
          userAnswer: 7,
          correctAnswer: 17,
          isCorrect: false
        },
        { id: '3', expression: '5 + 3', correctAnswer: 8 } // Note: This calculation has no userAnswer or isCorrect
      ],
      currentCalculation: null // No current calculation in this test case
    };

    // Render the CalculationsHistory component within a Redux store context with an initial state
    renderWithReduxToolkit(<CalculationsHistory />, initialState);

    // Assert that all expected list items are rendered in the document
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3); // Three calculations should result in three list items
    // Assert the presence of specific text related to each calculation, indicating correct rendering
    expect(screen.getByText('2 + 2 = 4')).toBeInTheDocument();
    expect(screen.getByText('Correct! 👏')).toBeInTheDocument();
    expect(screen.getByText('10 + 7 = 7')).toBeInTheDocument();
    expect(screen.getByText('Wrong! 😞')).toBeInTheDocument();
    expect(screen.getByText('5 + 3 = _')).toBeInTheDocument(); // The underscore represents an unanswered calculation
  });
});
