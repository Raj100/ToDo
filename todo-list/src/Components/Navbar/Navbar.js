import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <h1>ToDo</h1>
        </div>
        <div className="navbar-content">
          <ul>
            <li>Home</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    );
  }
}
