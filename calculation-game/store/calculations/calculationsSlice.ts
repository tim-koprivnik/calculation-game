import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Calculation {
  id: string;
  expression: string;
  userAnswer?: number;
  correctAnswer: number;
  isCorrect?: boolean;
}

export interface CalculationsState {
  history: Calculation[];
  currentCalculation: Calculation | null;
}

const initialState: CalculationsState = {
  history: [],
  currentCalculation: null
};

export const calculationsSlice = createSlice({
  name: 'calculations',
  initialState,
  reducers: {
    addCalculation: (state, action: PayloadAction<Calculation>) => {
      state.currentCalculation = action.payload;
      state.history.unshift(action.payload);
    },
    answerCalculation: (
      state,
      action: PayloadAction<{ id: string; userAnswer: number }>
    ) => {
      const { id, userAnswer } = action.payload;
      const calculation = state.history.find((calc) => calc.id === id);
      if (calculation) {
        calculation.userAnswer = userAnswer;
        calculation.isCorrect = calculation.correctAnswer === userAnswer;
      }
    }
  }
});

export const { addCalculation, answerCalculation } = calculationsSlice.actions;

export const selectHistory = (state: RootState) => state.calculations.history;
export const selectCurrentCalculation = (state: RootState) =>
  state.calculations.currentCalculation;

export default calculationsSlice.reducer;
