import { useState } from "react";

function Busqueda(props) {
  function fondoCiudad(foto, id) {
    document.getElementById(id).style.backgroundImage = `url('images/${foto}')`;
  }
  return (
    <div class='cuadroSearch'>
      <p>Select asteroid search</p>
      <div>
        <p>Date:</p>

        <input type="date" id="fecha" />
        <button
          id="results"
          onClick={() => {
            props.funcion(document.getElementById("fecha").value);
            props.menu("results");
          }}
        >
          results
        </button>

        <p>Choose city as size reference:</p>
        <div id="columnasBusqueda">
          <button
            onClick={() => {
              fondoCiudad("madrid.png", "root");
            }}
          >
            Madrid
          </button>
          <button
            onClick={() => {
              fondoCiudad("new york.png", "root");
            }}
          >
            Ney York
          </button>
          <button
            onClick={() => {
              fondoCiudad("tokyo.png", "root");
            }}
          >
            Tokyo
          </button>
          <button
            onClick={() => {
              fondoCiudad("niebla.png", "root");
            }}
          >
            Niebla
          </button>
        </div>
      </div>
    </div>
  );
}

export default Busqueda;
