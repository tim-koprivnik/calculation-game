'use client';

import { useSelector } from 'react-redux';
import { selectCurrentCalculation } from '../../store/calculations/calculationsSlice';
import { Typography } from '@mui/material';

const CalculationDisplay: React.FC = () => {
  const currentCalculation = useSelector(selectCurrentCalculation);

  return (
    <Typography variant="h4" component="h2" className="text-center">
      {currentCalculation
        ? `${currentCalculation.expression} = _`
        : 'Welcome to the Calculation Game'}
    </Typography>
  );
};

export default CalculationDisplay;
