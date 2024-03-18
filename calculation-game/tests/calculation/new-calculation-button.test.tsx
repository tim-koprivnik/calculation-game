import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithReduxToolkit } from '../../utils/test-utils';
import NewCalculationButton from '../../components/calculation/new-calculation-button';
import * as calculationSlice from '../../store/calculations/calculationsSlice';
import { generateNewCalculation } from '../../utils/utils';

// Mock the generateNewCalculation function to control its output and behavior in tests
jest.mock('../../utils/utils');

describe('new-calculation-button', () => {
  // Clean up all mocks after each test to ensure a clean test environment
  afterEach(() => {
    jest.restoreAllMocks();
  });

  // Test to verify that clicking the "New Calculation" button dispatches the expected Redux action
  it('dispatches addCalculation action with a new calculation on click', () => {
    // Mock the implementation of generateNewCalculation to return a predictable value
    generateNewCalculation.mockReturnValue({
      id: 'mockId',
      expression: '1 + 1',
      correctAnswer: 2
    });

    // Spy on the addCalculation action creator to check if it's called correctly
    const addCalculationSpy = jest.spyOn(calculationSlice, 'addCalculation');

    // Render the NewCalculationButton component within a Redux store context
    renderWithReduxToolkit(<NewCalculationButton />);

    // Simulate a user clicking the "New Calculation" button
    fireEvent.click(screen.getByRole('button', { name: 'New Calculation' }));

    // Assert that generateNewCalculation was called to generate a new calculation
    expect(generateNewCalculation).toHaveBeenCalled();

    // Assert that the addCalculation action was dispatched with the expected payload
    expect(addCalculationSpy).toHaveBeenCalledWith({
      id: 'mockId',
      expression: '1 + 1',
      correctAnswer: 2
    });
  });
});
