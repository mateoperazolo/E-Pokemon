import React from "react";
import './header.css';

function Navigation(props) {
  return(
    <nav className="navHeader">
      {props.items.map((item) => {
        return (
          <a
            className="LicksHeader" 
            href={item.link}
          >
              {item.nombre}
          </a>
        )
      }) }
    </nav>
  )




}

export { Navigation }