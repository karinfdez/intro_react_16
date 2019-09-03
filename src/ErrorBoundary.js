import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

//This component catch and error that comes from any childrens
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false
    };
  }

  //getDerivedStateFromError and componentDidCatch --> Can only be used with class components, not hooks
  //getDerivedStateFromError and componentDidCatch functions -->   These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
  //getDerivedStateFromError it's called during the "render" phase
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  //It's invoked after an error has been thrown by a descendant component
  //Here logs are sent
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  //Is invoked everytime a props or state changes.
  //This method is not called for the initial render.
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait 5 seconds.
        </h1>
      );
    }
    //Returns what is contained inside of a comp. If no error, continues passing through
    return this.props.children;
  }
}

export default ErrorBoundary;
