// App.jsx

import { useState } from "react";
import { v4 as generateUniqueID } from 'uuid'; 
import { dogsData } from "./data";

function App() { 
  // State for our pet nickname
  const [nickName, setNickName] = useState("");
  // State for our checkbox input
  const [checked, setChecked] = useState(false);
  // State for our select options
  const [selectOption, setSelectOption] = useState('');
  
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

// function to handle our checkbox
  const handleCheckboxChange = () => {
    // toggles the checked state between true and false
    setChecked(!checked);
  }

// function to handle the select option changes
const handleSelectChange = (event) => {
  setSelectOption(event.target.value);
}

// function to update our nickname
function handleNickNameChange(event) {
  setNickName(event.target.value);
}


  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <h3>You selected {selectOption}</h3>
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
        <form>
          <label htmlFor='swim'>Likes Swimming</label>
          <input id='swim' type='checkbox' checked={checked} onChange={handleCheckboxChange}/>
          <label>Which do you prefer?</label>
          <select onChange={handleSelectChange}>
            <option value=""></option>
            <option value="Cats">Cats!</option>
            <option value="Dogs">Dogs!</option>
          </select>
          <label>Nickname: </label>
          <input type="text" onChange={handleNickNameChange} />
          <h3>
            {nickName} selected {selectOption}
          </h3>
        </form>
      </main>
    </div>
  );
}

export default App;
