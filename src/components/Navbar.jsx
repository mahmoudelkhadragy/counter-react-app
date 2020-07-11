import React from "react";

const Navbar = (props) => {
  let classes = "badge badge-pill  mx-2 badge-";
  props.totalCounters === 0 ? (classes += "secondary") : (classes += "warning");

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
        <span className={classes}>{props.totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
