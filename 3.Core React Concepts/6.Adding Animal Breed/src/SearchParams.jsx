import { useState } from "react";
const ANIMALS = ["", "bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];
const SearchParams = () => {
  /**
   * * Render functions should be stateless, as in they are not modifying global globals inside the component. You use hooks to keep track of state.
   */
  /**
   * * You can have as many hooks inside a component as you need.
   * * Hooks must be "top-level", they cannot be used in conditional branches or inside functions.
   * * Hooks must also be called, "every single time in the same order".
   */
  const [location, setLocation] = useState("Seattle, Wa");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Animal
          <select
            id="breed"
            value={breed}
            disabled={BREEDS.length === 0}
            onChange={(e) => setBreed(e.target.value)}
          >
            {BREEDS.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
