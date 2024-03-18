'use client';

import CalculationDisplay from '../components/calculation/calculation-display';
import CalculationForm from '../components/calculation/calculation-form';
import CalculationsHistory from '../components/calculation/calculations-history';
import NewCalculationButton from '../components/calculation/new-calculation-button';
import { useSelector } from 'react-redux';
import { selectCurrentCalculation } from '../store/calculations/calculationsSlice';

export default function Home() {
  const currentCalculation = useSelector(selectCurrentCalculation);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 m-auto gap-4">
      {/* Display the current calculation or a welcome message */}
      <section>
        <CalculationDisplay />
      </section>

      <section className="flex flex-col justify-center md:flex-row md:justify-between md:min-w-[500px]">
        {/* Display the form only if there's a current calculation */}
        {currentCalculation && (
          <div className="md:flex-1">
            <CalculationForm calculationId={currentCalculation.id} />
          </div>
        )}

        {/* Display the history of calculations */}
        <div className="md:flex-1 relative flex justify-center">
          {currentCalculation && <CalculationsHistory />}
        </div>
      </section>

      <section className="mt-[210px] md:mt-[70px]">
        {/* Button to generate a new calculation */}
        <NewCalculationButton />
      </section>
    </main>
  );
}
