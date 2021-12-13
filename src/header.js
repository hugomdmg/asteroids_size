function Cabecera(props) {
  return (
    <>
      <header>
        <div>
          <h1>Detected asteroid seeker</h1>
          <h3>data obtained from NASA</h3>
        </div>
        <nav>
          <button
            onClick={() => {
              props.menu("start");
              document.getElementById(
                "root"
              ).style.backgroundImage = `url('cielo_estrellado.png')`;
            }}
            id="start"
          >
            <h3>Start</h3>
          </button>
          <button
            onClick={() => {
              props.menu("search");
            }}
            id="search"
          >
            <h3>Search</h3>
          </button>
          <button
            onClick={() => {
              props.menu("game");
            }}
            id="game"
          >
            <h3>game</h3>
          </button>
          <button
            onClick={() => {
              props.menu("login");
            }}
            id="login"
          >
            <h3>{props.login}</h3>
          </button>
          <p id="fav"></p>
        </nav>
      </header>
    </>
  );
}

export default Cabecera;
