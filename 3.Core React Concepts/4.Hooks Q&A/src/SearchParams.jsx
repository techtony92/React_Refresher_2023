import { useState } from "react";
const SearchParams = () => {
  /**
   * * Render functions should be stateless, as in they are not modifying global globals inside the component. You use hooks to keep track of state.
   */
  /**
   * * You can have as many hooks inside a component as you need.
   * * Hooks must be "top-level", they cannot be used in conditional branches or inside functions.
   * * Hooks must also be called, "every single time in the same order".
   */
  // const [location, setLocation] = useState("Seattle, Wa");

  /**
   * *The following lines are the same for as the above set State Hook
   */
  const locationHook = useState("");
  const location = locationHook[0]; // Location value
  const setLocation = locationHook[1]; // Function to update State
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
