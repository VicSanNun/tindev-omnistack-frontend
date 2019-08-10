import React from 'react';

import logo from '../assets/logo.svg';

import './login.css';

export default function Login() {
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev"></img>
                <input type="text" placeholder="Digite o seu usuário do GitHub"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}