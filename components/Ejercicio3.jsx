import React from 'react';

class Ejercicio3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej3">
        <h2>Ejercicio 3</h2>
        <ol>
          <li>
            Utiliza la API REST de{' '}
            <a href="https://openlibra.com/es/page/public-api">OpenLibra.com</a>{' '}
            para obtener datos acerca de libros. La petición tendrá que incluir
            los siguientes parámetros:<b> - 1,5 puntos</b>
          </li>
          <ul>
            <li>Categoría: Programación</li>
            <li>Número máximo de resultados: 5</li>
            <li>Idioma: español</li>
          </ul>
          <li>
            Utiliza los resultados devueltos por la consulta para rellenar un
            componente{' '}
            <a href="https://react-bootstrap.github.io/components/carousel/">
              Carrusel
            </a>{' '}
            de React-Bootstrap usando los siguientes campos:<b> - 1,5 puntos</b>
            <ul>
              <li>Imagen: cover</li>
              <li>Título: title</li>
              <li>Autor: author</li>
            </ul>
            Este además se encontrará anidado dentro de un Container de
            React-Bootstrap
          </li>
          <li>
            {' '}
            Modifica los estilos para que se muestre la imagen de portada a la
            izquierda del elemento de carrusel y a la derecha los atributos de
            texto, añadiendo la descripción acortada (content_short){' '}
            <b> - 1 punto</b>
          </li>
        </ol>
      </div>
    );
  }
}

export default Ejercicio3;