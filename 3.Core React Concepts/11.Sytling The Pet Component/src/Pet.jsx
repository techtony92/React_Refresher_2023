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
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
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
