const Pet = (props) => {
  /**
   * * One way Data flow
   * * React has a concept called `one-way data-flow` were we can always pass data down,
   * * from parent to child, but not the other way around. We cannot pass data from child
   * * to parent. IE from Pet to App.
   * *
   * * This is great for debugging because we know that children cannot mess with there
   * * parents.
   */

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
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
