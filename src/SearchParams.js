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
  //useEffect takes place of several cicles hooks => componentDidMount, componentWillUnmount, componentDidUpdate)
  useEffect(() => {
    //In order to clean previous list(e.x. list of dog's breeds, to then change to cat's breeds)
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [setBreeds, setBreed, animal]); //If any of these dependencies changes, rerun useEffect after comp renders. Order dependencies don't matter
  //To run only once when it first renders, pass [](where it depends on nothing)
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
