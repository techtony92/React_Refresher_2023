import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch.js";
import useBreedList from "./useBreedList.js";
import Results from "./Results";
const ANIMALS = ["", "bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  /**
   * * Render functions should be stateless, as in they are not modifying global globals inside the component. You use hooks to keep track of state.
   */
  /**
   * * You can have as many hooks inside a component as you need.
   * * Hooks must be "top-level", they cannot be used in conditional branches or inside functions.
   * * Hooks must also be called, "every single time in the same order".
   */
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      {/*
        This form is known as a controlled form. A controlled form is where the value of the form is controlled by react.
        For example, the value inside a setState hook is controlling the value that the form displays. This actually isn't best
        practice. 
      */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input name="locations" id="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Animal
          <select id="breed" name="breed" disabled={breeds.length === 0}>
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
      {/*
       * * React has what is called keys. When doing simple operations like re-arranging elements in a collection For example:
       * * Imaging instead of listing by animal, you list by breed. According to react, all it knows is that the array changed, so
       * * it will destroy everything inside of that render tree and re-render everything from scratch, kinda a waiste because nothing truly changed inside of the array.
       * * Keys allow react to simply swap items (provided that keys are unique) instead of re-rendering everything.
       * **** This is a performance optimization ******
       *
       * * Note: Using index for keys is bad and not recommended. If you swap an item from 0 to 3, the index isn't going to follow it,
       * * because index is given to items in a order as they come and not associated with a specific item at all. So react will still destroy the tree.
       */}
    </div>
  );
};

export default SearchParams;
