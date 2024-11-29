import React, { useState } from 'react';
import { animals } from '../data/AnimalsDb';

export default function GameBase() {
  const randomAnimal = () => {
    const animalId = Math.floor(Math.random() * animals.length);
    return animals[animalId].name;
  };

  const [targetAnimal, setTargetAnimal] = useState(randomAnimal());
  const [message, setMessage] = useState('');

  const handleClickAnimal = (selectedAnimal) => {
    if (selectedAnimal === targetAnimal) {
      setMessage('You won!');
    } else {
      setMessage('You lose!');
    }
    setTimeout(() => {
      setTargetAnimal(randomAnimal());
      setMessage('');
    }, 2000);
  };

  return (
    <div>
      <h1>Animal Matching Game</h1>
      <h3>Find: {targetAnimal}</h3>
      {message && <h3>{message}</h3>}
      {animals.map((animal) => (
        <button>
          <img
            src={require('../assets/fig/' + animal.img)}
            alt={animal.name}
            onClick={() => {
              handleClickAnimal(animal.name);
            }}
          />
        </button>
      ))}
    </div>
  );
}
