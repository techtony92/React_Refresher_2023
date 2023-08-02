import { Link } from "react-router-dom";
const Pet = ({ name, animal, breed, images, location, id }) => {
  console.log(images);
  /**
   * * One way Data flow
   * * React has a concept called `one-way data-flow` were we can always pass data down,
   * * from parent to child, but not the other way around. We cannot pass data from child
   * * to parent. IE from Pet to App.
   * *
   * * This is great for debugging because we know that children cannot mess with there
   * * parents.
   */

  let hero = `http://pets-images.dev-apis.com/pets/none.jpg`;
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      {/* Connects to the route that matches the url `/details/:id`*/}
      {/* * React Router dom's Link component is better than the traditional <a> element. Reason being is that when the <a> element is clicked
       * React does a full refresh of the page, as with the <Link> element from react router will have the <Browser Router> component handle/Capture
       * the event and then route without forcing the user to completely refresh the page. This is a performance optimization.
       * Without it, routing will be slower and take longer as well as react having to re-bootstrap which can be expensive on low end devices.
       */}
      {/* *
       * A Great feature of react router is that the authors of it, take great care for accessibility.
       */}
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};
/**
 * Default export
 */
export default Pet;

/**
 * Named export
 */
export const Thing = Pet;
