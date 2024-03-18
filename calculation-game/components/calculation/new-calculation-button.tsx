'use client';

import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { addCalculation } from '../../store/calculations/calculationsSlice';
import { generateNewCalculation } from '../../utils/utils';

const NewCalculationButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleNewCalculation = () => {
    const newCalculation = generateNewCalculation();
    dispatch(addCalculation(newCalculation));
  };

  return (
    <Button variant="outlined" color="primary" onClick={handleNewCalculation}>
      New Calculation
    </Button>
  );
};

export default NewCalculationButton;
