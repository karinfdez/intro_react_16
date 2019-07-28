import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropDown";
const SearchParams = () => {
  //location = current state
  //setLocation = updated function for a particular piece of state(location, in this example)
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown("animal", "dog", ANIMALS);
  const [breed, BreedDropDown] = useDropdown("breed", "", breeds);

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
