import { Component } from "react";
import { Link } from "react-router-dom";
/**
 * * Error Boundaries
 *
 * * Error boundaries catch errors inside your app and can provide messages to fix said error.
 * * Error boundaries also are helpful dev tools, but they can only be written as class components.
 * * This is because of a life cycle method called componentDidCatch() and the static method getDerivedStateFromError.
 */
class ErrorBoundary extends Component {
  state = { hasError: false };
  // Static basically means call the method directly on the class, instead of an instance of the class.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  //life cycle method
  componentDidCatch(error, info) {
    // Typically you would log this to something like TrackJS or newRelic
    console.error("ErrorBoundary Component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this Listing.{" "}
          <Link to="/">Click here to return to the home page.</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
