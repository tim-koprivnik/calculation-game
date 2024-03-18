'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import {
  answerCalculation,
  addCalculation
} from '../../store/calculations/calculationsSlice';
import { generateNewCalculation } from '../../utils/utils';

const CalculationForm: React.FC<{ calculationId: string }> = ({
  calculationId
}) => {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      answerCalculation({ id: calculationId, userAnswer: parseInt(answer) })
    );
    setAnswer(''); // Reset the input field

    const newCalculation = generateNewCalculation();
    dispatch(addCalculation(newCalculation));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 space-y-4">
      <div>
        <TextField
          label="Your Answer"
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          variant="outlined"
          required
          autoFocus
          placeholder="Enter value"
          color="primary"
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: '#1976d2' } }}
          // Custom styles
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#1976d2'
              },
              '&:hover fieldset': {
                borderColor: '#1976d2'
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976d2'
              }
            }
          }}
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className="w-full md:w-auto"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CalculationForm;
