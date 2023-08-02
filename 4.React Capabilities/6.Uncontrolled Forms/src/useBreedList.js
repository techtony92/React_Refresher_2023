import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList.js";
/**
 * * The secret to writing long-term maintainable React code
 * *
 * * The hardest part about react is useEffect
 * * The most bug you will see, when does this effect run, does this effect cascade into other effects which then
 * * do those effects cascade into other effects.
 * * React query allows us to remove our useEffects and react query itself can handle any API calls.
 */
export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
