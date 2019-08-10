import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

import './main.css';

export default function main({match}){
    return(
        <div className="main-container">
            <img src={logo} alt="Tindev"></img>
            <ul>
                <li>
                    <img src="" alt="Foto de Perfil"/>
                    <footer>
                        <strong>Name</strong>
                        <p>Descrição</p>
                    </footer>

                    <div className="buttons">
                        <button type="button"><img src={like} alt="like"></img></button>
                        <button type="button"><img src={dislike} alt="dislike"></img></button>
                    </div>
                </li>
                <li>
                    <img src="" alt="Foto de Perfil"/>
                    <footer>
                        <strong>Name</strong>
                        <p>Descrição</p>
                    </footer>

                    <div className="buttons">
                        <button type="button"><img src={like} alt="like"></img></button>
                        <button type="button"><img src={dislike} alt="dislike"></img></button>
                    </div>
                </li>
                <li>
                    <img src="" alt="Foto de Perfil"/>
                    <footer>
                        <strong>Name</strong>
                        <p>Descrição</p>
                    </footer>

                    <div className="buttons">
                        <button type="button"><img src={like} alt="like"></img></button>
                        <button type="button"><img src={dislike} alt="dislike"></img></button>
                    </div>
                </li>
                <li>
                    <img src="" alt="Foto de Perfil"/>
                    <footer>
                        <strong>Name</strong>
                        <p>Descrição</p>
                    </footer>

                    <div className="buttons">
                        <button type="button"><img src={like} alt="like"></img></button>
                        <button type="button"><img src={dislike} alt="dislike"></img></button>
                    </div>
                </li>
            </ul>
        </div>
    );
}