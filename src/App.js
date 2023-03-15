import React, { useState } from 'react';
import {Name} from './components/Name';
import {Food} from './components/Food';
import {Drink} from './components/Drink';
import {Result} from './components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [result, setResult] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1)
  };
  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Food food={food} setFood={setFood} />
      )}
      {step === 3 && (
        <Drink drink={drink} setDrink={setDrink} />
      )}
      {step === 4 && (
        <Result name={name} food={food} drink={drink} />
      )}
      <>
        <button type="button" onClick={handleStepIncrease}>Next step</button>
        <p>Current step: {step}</p>
      </>
    </>
  );
};
