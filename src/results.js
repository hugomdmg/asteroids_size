import { useState } from "react/cjs/react.development";
import Cargando from "./cargando";

function Results(props) {
  let tamanyo = 0;
  let [control, setControl] = useState(true);
  let [ejeMayor, setEjeMayor] = useState(0);
  let [ejeMenor, setEjeMenor] = useState(0);
  let [distancia, setDistancia] = useState(0);
  let [velocidad, setVelocidad] = useState(0);
  let [nombre, setNombre] = useState(0);
  let [asteroides, setAsteroides] = useState([]);
  let [index, setIndex] = useState(0);

  function otro(){
    setEjeMayor(asteroides[index].estimated_diameter.kilometers.estimated_diameter_max
      );
              setEjeMenor(
                asteroides[index].estimated_diameter.kilometers.estimated_diameter_min
              );
              setDistancia(
                asteroides[index].close_approach_data[0].miss_distance.kilometers
              );
              setVelocidad(
                asteroides[index].close_approach_data[0].relative_velocity
                  .kilometers_per_second
              );
              setNombre(asteroides[index].name);
              if(index<asteroides.length-1){
                setIndex(index+1);
              }else{
                setIndex(0);
              }
  }

  if (control) {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${props.fecha}&end_date=${props.fecha}&api_key=b91mKAKauO8kwBcWqhFHXDoBT2qZSb3Uq1kNwJGX`
    )
      .then((res) => {
        return res.json();
      })
      .then((datos) => {
          let data = datos.near_earth_objects[props.fecha];
          let index = 0;
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            if (
              tamanyo <
              parseFloat(
                data[i].estimated_diameter.kilometers.estimated_diameter_max
              )
            ) {
              tamanyo = parseFloat(
                data[i].estimated_diameter.kilometers.estimated_diameter_max
              );
              index = i;
            }
            if (i == data.length - 1) {
              setControl(false);
              setEjeMayor(tamanyo);
              setEjeMenor(
                data[index].estimated_diameter.kilometers.estimated_diameter_min
              );
              setDistancia(
                data[index].close_approach_data[0].miss_distance.kilometers
              );
              setVelocidad(
                data[index].close_approach_data[0].relative_velocity
                  .kilometers_per_second
              );
              setNombre(data[index].name);
              setAsteroides(data);
            }
          }
      });
  }

  if (control) {
    return (
      <div id="cargando">
        <p>searching...</p>
        <Cargando/>
      </div>
    );
  } else {
    return (
      <>
        <div id="tarjetaResultados">
          <div id="fondo">
            <div id="datos">
              <h2>Asteroid data:</h2>
              <h3>Mayor axis (km): {ejeMayor}</h3>
              <h3>Minor axis (km): {ejeMenor}</h3>
              <h3>Distance when discovered (km): {distancia}</h3>
              <h3>Speed when discovered (km/s): {velocidad}</h3>
              <h3>Name: {nombre}</h3>
              <p>Discovered asteroides: {asteroides.length}</p>
              <button onClick="favoritos()">Add to fav</button>
              <button onClick={()=>{otro()}}>other</button>
            </div>
            <div id="cuadroImagen">
              <img id="imagen" src="images/asteroide.png" width={`${ejeMayor*300}px`} height={`${ejeMayor*300}px`} />
            </div>
          </div>
          <div></div>
        </div>
      </>
    );
  }
}

export default Results;
