import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "../Styles/Dropdown.css";
function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick_p = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick_p}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
