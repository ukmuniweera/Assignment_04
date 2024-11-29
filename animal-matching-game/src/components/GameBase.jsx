import { useEffect, useState } from 'react';
import {animals} from '../data/AnimalsDb';

export default function GameBase() {
    const [targetAnimal, setTargetAnimal] = useState('');
    const [message, setMessage] = useState('');

    useEffect(()=>{
        setTargetAnimal(randomAnimal());
    },[])

    const randomAnimal=()=>{
        const animalID = Math.floor(Math.random() * animals.length) + 1;
        return (animals[animalID].name);
    }

    const handleAnimalClick=(selectedAnimal)=>{
        if (selectedAnimal === targetAnimal) {
            setMessage('You Won!');
        } else {
            setMessage('You Lost!');
        }
        setTimeout(()=>{
            setTargetAnimal(randomAnimal());
            setMessage('');
        },2000);
    }
    
  return (
    <div>
        <h1>Animal Matching Game</h1>
        <h2>Find: {targetAnimal}</h2>
        {message && <h3>{message}</h3>}
        {animals.map((animal)=>(
            <button>
                <img 
                src={require('../assets/fig/'+animal.img)} 
                alt={animal.name} 
                onClick={()=>{handleAnimalClick(animal.name)}}
                />
            </button>
        ))}
    </div>
  );
}
