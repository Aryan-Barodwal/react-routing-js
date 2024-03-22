import React from "react";
import { NavLink } from "react-router-dom";

const Navbarr = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="flex m-0 p-0 justify-center gap-4 text-lg text-cyan-500">

          <NavLink className={(e) => {
              return e.isActive ? "bg-red-700" : "";
            }}
            to="/Home"
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            className={(e) => {
              return e.isActive ? "bg-red-700" : "";
            }}
            to="/Login"
          >
            <li>Login</li>
          </NavLink>

          <NavLink
            className={(e) => {
              return e.isActive ? "bg-red-700" : "";
            }}
            to="/About"
          >
            <li>About</li>
          </NavLink>

          <NavLink
            className={(e) => {
              return e.isActive ? "bg-red-700" : "";
            }}
            to="/User"
          >
            <li>Users</li>
          </NavLink>
        </ul>
      </nav>
    </div>

    // The main difference between basic routing and dynamic routing in React.js lies in how routes are defined and handled.

    // Basic Routing:

    // In basic routing, routes are predefined and explicitly declared in the application code.
    // Each route is mapped to a specific component, and users navigate between these predefined routes.
    // Basic routing is suitable for applications with fixed navigation paths and known routes.

    // Dynamic Routing:

    // Dynamic routing involves generating routes dynamically based on data or user input.
    // Routes are generated programmatically, often based on the content of the application or external data sources.
    // Dynamic routing allows for more flexible navigation paths and can handle scenarios where the number or structure of routes may change dynamically.
    // It is commonly used in applications where the content is dynamic, such as blog posts, product listings, or user-generated content.
    // In summary, while basic routing provides a static set of predefined routes, dynamic routing allows for the generation of routes based on data or user input, offering more flexibility and adaptability in navigation paths.
  );
};

export default Navbarr;
