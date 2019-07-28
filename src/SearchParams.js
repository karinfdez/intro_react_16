import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropDown";

const SearchParams = () => {
  //location = current state
  //setLocation = updated function for a particular piece of state(location, in this example)
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown("animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropdown("breed", "", breeds);
  //useEffect takes place of several clicles hooks
  //(componentDidMount, componentWillUnmount, componentDidUpdate)
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [setBreeds, setBreed, animal]); //If any of these parameters changes, rerun useEffect after comp renders. Order of parameters don't matter

  return (
    <div className="search-params">
      <form>
        useDropDown
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
