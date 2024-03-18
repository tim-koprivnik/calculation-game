import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import calculationsReducer, {
  CalculationsState
} from '../store/calculations/calculationsSlice';

// Utility function to render components with Redux Toolkit store
export const renderWithReduxToolkit = (
  component: React.ReactElement,
  initialState?: CalculationsState
): { store: EnhancedStore } => {
  const store = configureStore({
    reducer: {
      calculations: calculationsReducer
    },
    preloadedState: initialState ? { calculations: initialState } : undefined
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};
