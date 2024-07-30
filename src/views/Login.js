import React from "react";
import { useNavigate } from "react-router-dom";
import miImagen from "../assets/logo.jpeg";
import '../css/Login.css'

function Login() {
  const navigate = useNavigate();
  const handleIniciarSesion = () => navigate("/");
  return (
        <div class="container mt-3">
            <h1 class="text-center bokor-regular-title">-Barber Shop-</h1>
            <br />
            <div class="row justify-content-center align-items-center g-2 mt-3">
                <div class="col-md-3 text-center">
                    <img src={miImagen} alt="Barber Shop" class="img-fluid" />
                </div>
                <div class="col-md-5">
                    <div class="card border-0">
                        <div class="card-body">
                        <h4 class="card-title text-center bokor-regular-subtitle">Bienvenido!</h4>
                            <form className="mt-2">
                                <div class="form-group">
                                    <label className="bokor-regular-label" for="usuario">Usuario:</label>
                                    <input
                                        class="form-control"
                                        type="email"
                                        name="Usuario"
                                        id="usuario"
                                        placeholder="Ejemplo@ejemplo.com"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label className="bokor-regular-label" for="password">Password:</label>
                                    <input
                                        class="form-control"
                                        type="password"
                                        name="Password"
                                        id="password"
                                        placeholder="Contraseña"
                                        required
                                    />
                                </div>
                                <div class="text-center mt-3">
                                    <input
                                        class="btn btn-success bokor-regular-button"
                                        type="submit"
                                        value="Iniciar Sesion"
                                        onclick={handleIniciarSesion}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}



export default Login;
