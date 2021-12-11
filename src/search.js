import { useState } from "react";


function Busqueda(props) {
function fondoCiudad(foto, id) {
  document.getElementById(id).style.backgroundImage = `url('images/${foto}')`;
}
    return(
        <>
      <p>Select asteroid search</p>
      <div>
          <p>Date:</p>
          
          <input type="date" id="fecha"/>
          <button id="results" onClick={()=>{props.funcion(document.getElementById('fecha').value);props.menu('results') }}>results</button>
          
          <p>Choose city as size reference
          :</p>
          <div id = 'columnasBusqueda'>
              <ul>
                  <li><button onClick = {()=>{fondoCiudad('madrid.png', 'root')}}>Madrid</button></li>
                  <li><button onClick = {()=>{fondoCiudad('new york.png', 'root')}}>Ney York</button></li>   
              </ul>
              <ul>
                <li><button onClick = {()=>{fondoCiudad('tokyo.png', 'root')}}>Tokyo</button></li>
                <li><button onClick = {()=>{fondoCiudad('niebla.png', 'root')}}>Niebla</button></li>   
              </ul>
          </div>
      </div>`
      </>
      )
  }

  export default Busqueda;