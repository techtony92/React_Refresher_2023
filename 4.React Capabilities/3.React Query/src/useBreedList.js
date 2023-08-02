import { useState, useEffect } from "react";
/**
 * * The secret to writing long-term maintainable React code
 * *
 * * The hardest part about react is useEffect
 * * The most bug you will see, when does this effect run, does this effect cascade into other effects which then
 * * do those effects cascade into other effects.
 * * React query allows us to remove our useEffects and react query itself can handle any API calls.
 */
const localCache = {};
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
