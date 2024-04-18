// App.jsx

import { useState } from "react";
import { v4 as generateUniqueID } from 'uuid'; 
import { dogsData } from "./data";

function App() {  
  // State variable for our dogs data;
  const [dogs, setDogs] = useState(dogsData);
  // State variable for our current dog
  const [currentDog, setCurrentDog] = useState({
    id: generateUniqueID(),
    name: 'Pookie',
    breed: 'Poodle',
    age: 1
  });

  // Function to add a new dog to our list of dogs  
  const addDog = () => {
    const rover = {
      id: generateUniqueID(),
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The goodest new dog",
    };

    setDogs([...dogs, rover])

  }

  const updateCurrentDog = () => {
    setCurrentDog({...currentDog, name:'leroy', breed: 'german shepard', age: 20});
  }

  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <aside></aside>
      <main>
        <p>Current Dog: {currentDog.name} the {currentDog.breed} is {currentDog.age} year{currentDog.age > 1 && 's'} old</p>
        <button onClick={addDog}>Add a new dog</button>
        <button onClick={updateCurrentDog}>Update current dog</button>
        <ul>
          {dogs.map(dog => {
            return (
              <li key={dog.id}>
                <span>{dog.name}</span>
              </li>
            )
          })} 
        </ul>
      </main>
    </div>
  );
}

export default App;
