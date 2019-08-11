import React, {useEffect, useState} from 'react';

import api from '../services/api.service';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

import './main.css';

export default function Main({match}){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/', {
                headers: {
                    user: match.params.id
                }
            })

            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id])

    async function handleLike(id){
        await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id
            }
        });

        setUsers(users.filter(user => user._id != id));
    }

    async function handleDislike(id){
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: match.params.id
            }
        });
        
        setUsers(users.filter(user => user._id != id));

    }

    return(
        <div className="main-container">
            <img src={logo} alt="Tindev"></img>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt="Foto de Perfil"/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            <div className="buttons">
                                <button type="button"><img src={like} onClick={() => handleLike(user._id)} alt="like"></img></button>
                                <button type="button"><img src={dislike} onClick={() => handleDislike(user._id)} alt="dislike"></img></button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1>Sem Informçaões</h1>
            )}
        </div>
    );
}