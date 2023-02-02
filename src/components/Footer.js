import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Built by Rishikesh pandey</p>
    </footer>
  );
}

export default Footer;
