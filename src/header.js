function Cabecera(props){
    return(
        <>
        <header>
        <div>
            <h1>Detected asteroid seeker</h1>
            <h3>data obtained from NASA</h3>
        </div>
        <nav>
            <button onClick = {()=>{props.menu('start');   document.getElementById('root').style.backgroundImage = `url('cielo_estrellado.png')`;
}} id = 'start'><h3>Start</h3></button>
            <button onClick = {()=>{props.menu('search')}} onclick = "contador0()" id = 'search'><h3>Search</h3></button>
            <button onClick = {()=>{props.menu('fav')}} id = 'fav'><h3>Favorites</h3></button>
        </nav>
    </header>
        </>
    )
};

export default Cabecera;