import { Component } from "react";

/**
 * * Class Components
 *
 * * Class components must extends React's component class
 * * Class components must have the render function in order to show anything
 * * on the screen.
 *
 * * Class components get their props and access their state using the 'this' keyword.
 * *
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
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
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
