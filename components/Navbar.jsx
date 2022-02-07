import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <a href="#ej1">Ejercicio 1</a>
          </li>
          <li>
            <a href="#ej2">Ejercicio 2</a>
          </li>
          <li>
            <a href="#ej3">Ejercicio 3</a>
          </li>
        </ul>
      </>
    );
  }
}
export default Navbar;