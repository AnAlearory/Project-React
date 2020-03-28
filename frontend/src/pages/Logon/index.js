import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';
import HerosImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');

    const history = useHistory();

    async function HandleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('session', { id });

            localStorage.setItem('OngId', id);
            localStorage.setItem('OngName', response.data.name);

            history.push('/profile');
        }catch(err){
            alert('Falha no Login');
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo"/>

                <form onSubmit={HandleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input 
                        placeholder="Sua Id"
                        value={id}
                        onChange={e=> setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={HerosImg} alt="Heros"></img>
        </div>
    );

}