import React from 'react';

class Ejercicio1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej1">
        <h2>Ejercicio 1</h2>
        <ul>
          <li>
            Modifica los componentes Navbar y App para que se pueda navegar a
            través de los ejercicios del examen de forma que se cumpla lo
            siguiente:
            <ul>
              <li>
                La barra de navegación implementa el componente de
                React-Bootstrap{' '}
                <a href="https://react-bootstrap.github.io/components/navbar/#offcanvas">
                  Offcanvas
                </a>{' '}
                <b> - 1,5 puntos</b>
              </li>
              <li>
                Bajo el título del examen solamente se deberá mostrar el
                ejercicio seleccionado en el menú, y no será necesario recargar
                la página para navegar por los distintos ejercicios{' '}
                <b> - 1 punto</b>
              </li>
              <li>
                Las opciones del menú se generarán de manera dinámica a partir
                de un objeto Javascript almacenado en un fichero con nombre{' '}
                <i>MenuElements.js</i>
                <b> - 0,5 puntos</b>
              </li>
            </ul>
            Añade al proyecto las dependencias que consideres necesarias.
          </li>
        </ul>
      </div>
    );
  }
}

export default Ejercicio1;