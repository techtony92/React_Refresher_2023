import { useParams } from "react-router-dom";
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
  return <h2>{id}</h2>;
};

export default Details;
