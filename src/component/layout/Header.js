import React from "react";

function Header() {
  return (
    <header>
      <h1 style={headerStyle}>TodoApp</h1>
    </header>
  );
}

const headerStyle = {
  textAlign: "center",
  marginBottom: "1.5rem",
  fontSize: "2.2rem",
};

export default Header;
