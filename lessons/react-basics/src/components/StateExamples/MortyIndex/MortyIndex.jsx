import React, { useState } from 'react';
import MortyCard from './MortyCard';

const MortyIndex = (props) => {
    const url = "https://rickandmortyapi.com/api/character"
    const [characters, setCharacters] = useState([]);
    const [characterId, setCharacterId] = useState("");

async function fetchMortyCharacters(){
    try{
        const response = await fetch(url)
        //if we get a bad response back from server, throw an error.
        if (!response.ok) {
            throw new Error(response.statusText);
          }
        const data = await response.json()
        setCharacters(data.results)
        // console.log(characters)
    } catch (error){
        console.error(error)
    }
}

async function fetchCharacterById(){
    try{
        const response = await fetch(url+"/"+characterId)
        //if we get a bad response back from server, throw an error.
        if (!response.ok) {
            throw new Error(response.statusText);
          }
        const data = await response.json()
        setCharacters([data])
        // console.log(data)
    }catch(error){console.error(error)}
}

function mortySingleCharacter(characterNumber) {
    console.log(characters([{characterNumber}]))
}
    function handleMortyClick(){
        fetchMortyCharacters()
    }
    function handleCharacterClick(){
        fetchCharacterById()
    }
    return ( <>
    <div className='headerDiv'>
        Rick and Morty Characters
    </div>
    <div className='imputButtonsDiv'>
        <div>
    <input type="text" placeholder="enter a number" value={characterId} onChange={(e)=> setCharacterId(e.target.value)} />
    </div> <div>
    <button onClick={handleMortyClick}>Get Morty</button>
    <button onClick={handleCharacterClick}>Select Character</button>
    </div></div>
    <div className='flexDiv'>
    {characters.map((character,index) => <MortyCard key={index}{...character}/>)}
    </div>
    </> );
}
 
export default MortyIndex;

/* 
.map in the index 
- 1. Crate a component that is called MortyCard
- 2. this component should take in a character object as a prop
- 3. this component should display the character's name, image, status, and species
- 4. style this component to look like a card (use flexbox)
- 5. Try your best to style it's not a race it's a contest! 
*/