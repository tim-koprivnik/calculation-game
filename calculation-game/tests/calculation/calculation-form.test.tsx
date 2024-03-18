import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithReduxToolkit } from '../../utils/test-utils';
import CalculationForm from '../../components/calculation/calculation-form';
import * as calculationSlice from '../../store/calculations/calculationsSlice';

describe('calculation-form', () => {
  // Test to verify that the form renders its input and submit button correctly
  it('renders input and submit button', () => {
    // Render the CalculationForm component within a Redux store context
    renderWithReduxToolkit(<CalculationForm calculationId="1" />);

    // Assert that the input field is present with the correct placeholder
    const input = screen.getByPlaceholderText('Enter value');
    expect(input).toBeInTheDocument();

    // Assert that the submit button is present and correctly labeled
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  // Test to verify that user input correctly updates the input field's value
  it('updates input value on change', () => {
    // Render the CalculationForm component within a Redux store context
    renderWithReduxToolkit(<CalculationForm calculationId="1" />);

    // Retrieve the input element and simulate a change event to update its value
    const input = screen.getByPlaceholderText('Enter value');
    fireEvent.change(input, { target: { value: '23' } });

    // Assert that the input's value has been updated to reflect the user input
    expect(input.value).toBe('23');
  });

  // Test to verify that submitting the form dispatches the expected Redux actions
  it('dispatches actions on form submission', () => {
    // Spy on the calculationSlice actions to monitor their dispatch actions when the form is submitted
    const answerCalculationSpy = jest.spyOn(
      calculationSlice,
      'answerCalculation'
    );
    const addCalculationSpy = jest.spyOn(calculationSlice, 'addCalculation');

    // Render the CalculationForm component within the context of a Redux store
    renderWithReduxToolkit(<CalculationForm calculationId="1" />);

    // Simulate user input and form submission
    const input = screen.getByPlaceholderText('Enter value');
    fireEvent.change(input, { target: { value: '23' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    // Assert that the answerCalculation action was dispatched with the expected payload
    expect(answerCalculationSpy).toHaveBeenCalledWith({
      id: '1',
      userAnswer: 23
    });

    // Assert that the addCalculation action was also dispatched, indicating a new calculation request
    expect(addCalculationSpy).toHaveBeenCalled();

    // Clean up the spies to ensure a clean state for subsequent tests
    answerCalculationSpy.mockRestore();
    addCalculationSpy.mockRestore();
  });
});
