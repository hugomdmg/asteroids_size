function Login() {
  return (
    <div id="contenedorCuadroLogin">
      <div id="cuadroLogin">
        <p>Email:</p>
        <input type="email" />
        <p>Password:</p>
        <input type="password" />
        <div id="botonesLogin">
        <button id="botonLogin">login</button>
        <p>or</p>
        <button id="botonRegistro">register</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
