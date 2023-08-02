import { Component } from "react";

/**
 * * Class Components
 *
 * * Class components must extends React's component class
 * * Class components must have the render function in order to show anything
 * * on the screen.
 *
 * * Class components get their props and access their state using the 'this' keyword.
 * * Class components cannot use hooks.
 */
class Carousel extends Component {
  /**
   * * State in class Components
   *
   * * State in class components is mutable, and we change it using the 'this.setState()' function
   */
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  /**
   * * Life Cycle methods:
   * * React has several life cycle methods that are called inside class components.
   * * In functional components, these methods are replaced with useEffect.
   */

  /**
   * * Life Cycle Method: ComponentDidMount()
   * * Used like use effect. To connect to external systems or run side effects when the component
   * * is first mounted onto the dom.This function runs once and never is ran again unless the component is
   * * re-mounted.
   */

  /**
   * * Life Cycle Method: ComponentDidUpdate()
   * * Runs every time the components state is updated.
   */
  /**
   * * Life Cycle Method: ComponentWillUnmount()
   * * Runs every time the component is removed from the dom.
   */

  /**
   * * Event listeners
   * *
   * * Event listeners in react can be a bit tricky, as they are reliant
   * * on the 'this' keyword
   */
  /**
   * * Traditional Functions vs Arrow Functions
   *
   * * When a arrow function in invoked, it does not create a new scope, so array function will work inside class components correctly.
   * * When a traditional function is invoked, it create a new scope to itself, so it will not work correctly with react class components out of the box.
   * * Traditional function need to be bound to the component using the bind() function.
   */
  handleIndexClick = (event) => {
    /**
     * * NOTE: The dom turns everything into a string. Even numbers. With that being said, we have a short hand way to convert strings into number
     * * Unary plus "+" basically a + sign appended to the front of a string will convert said string into a number.
     */
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt={"animal thumbnail"}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
