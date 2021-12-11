import './index.css';
import { useState } from 'react';
import Cabecera from './header';
import Busqueda from './search';
import Results from './results';



function App() {
  let [control, setControl] = useState('start');
  let [fecha, setFecha] = useState('');
  function menu(identificador) {
    document.getElementById('start').style.backgroundColor = "white";
    document.getElementById('search').style.backgroundColor = "white";
    document.getElementById('fav').style.backgroundColor = "white";
    document.getElementById(identificador).style.backgroundColor = "rgb(164, 197, 235)";
    setControl(identificador);
  };

  if(control == 'start'){
    return (
      <>
      <Cabecera menu={menu}/>
      <div id="espacio"></div>
      <main id = 'contenido'>
          <p id = 'parrafo'>Every day NASA discovers several huge fucking rocks that could kill us all. On this page you can select any date, and of all the fucking space rocks NASA found that day, the largest will be shown on the screen. You can choose a city to compare its size and verify that indeed we would be screwed if that shit falls on us, enjoy friend.</p>
          <p>We use the official data that NASA offers in its public access APIs, if someone has made a mistake, it has been them, we are good people here.</p>
      </main>
      </>
    );
  }else if(control == 'search'){
    return(
      <>
          <Cabecera menu={menu}/>
          <div id="espacio"></div>
          <Busqueda funcion={setFecha} menu={menu}/>
          
      </>
    )
  }else if(control == 'results'){
    return(
      <>
        <Cabecera menu={menu}/>
        <div id="espacio"></div>
        <Results fecha={fecha} menu={menu}/>
      </>
    )
  }
  
 
}

export default App;
