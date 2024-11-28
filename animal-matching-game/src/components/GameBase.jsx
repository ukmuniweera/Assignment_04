import React, { useState } from 'react';
import {animals} from '../data/AnimalsDb';

export default function GameBase() {
    const [animalName, setAnimalName] = useState('');
  return (
    <div>
        {animals.map((animal)=>(
            <button>
                <img 
                    src={require('../assets/fig/'+animal.img)} 
                    alt={animal.name} 
                    onClick={()=>setAnimalName(animal.name)}
                />
            </button>
        ))}
        <p>{animalName}</p>
    </div>
  );
}
