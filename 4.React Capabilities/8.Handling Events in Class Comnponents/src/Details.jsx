import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet.js";
// ** useParams is a react hook, Note the "use" at the beginning of the identifier.
const Details = () => {
  /**
   * * useParams
   *
   * * useParams has a 'context' that is available via the use of the <Browser Router> component.
   * * Think of it as like a side store of data being made available to useParams.
   * * useParams assumes that a <Browser Router> is available so it will reach in and find what ever
   * * variable that is being requested.
   */
  const { id } = useParams();

  /**
   * * @useQuery: takes 2 args:
   *
   * @param Array<[Cache Key, id]>
   * * Cache Key: the name in which react query uses to determine to send cached data, or to re-fetch data if no data is present or re-fetch and destroy stale data.
   * * Api Function: A function to call when the data is stale or no data exists in the cache.
   */
  const results = useQuery(["details", id], fetchPet); // id is the key used in fetchPet function
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
