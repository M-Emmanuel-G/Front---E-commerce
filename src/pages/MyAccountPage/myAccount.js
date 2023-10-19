import React, { useState } from 'react';
import Header from '../../components/Header/header';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase } from '../../styles/style';
import { BASE_URL } from '../../URL/URL';
import { ContainerMyAccount } from './style';
import axios from 'axios';
import NavBar from '../../components/NavBar/navBar';

export default function MyAccountPage() {

    const [client] = useRequestData(`${BASE_URL}/clients/getClient/${localStorage.getItem('cpf')}`)
    const [ pass, setPass ] = useState('')

    const showInputCamp = ()=>{
        if(document.getElementById('pass').style.opacity === '1'){
            document.getElementById('pass').style.opacity = '0'
        }else{
            document.getElementById('pass').style.opacity = '1'
        }
    }

    const updatePassword = ()=>{
        const body = {
            newPassword: pass
        }
        axios
            .post(`${BASE_URL}/clients/updatePass/${localStorage.getItem('idClient')}`, body)
            .then((res)=>{
                alert(res.data.message)
                setPass('')
                document.getElementById('pass').style.opacity = '0'
            })
            .catch((err)=>{
                alert(err.response.data)
            })
    }

    const renderClient = client.map((client, key)=>{
        return(
            <section key={key}>
                <div>
                    <label>Nome Completo:</label>
                    <span>{client.client_name}</span>
                </div>
                <div>
                    <label>Telefone:</label>
                    <span>{client.client_phone}</span>
                </div>
                <div>
                    <label>Email:</label>
                    <span>{client.client_email}</span>
                </div>
                <div id='changePass'>
                    <label>alterar senha:</label>
                    <button onClick={showInputCamp}> alterar</button>
                    <div id='pass'>
                        <input
                            type='text'
                            value={pass}
                            onChange={(ev)=>{setPass(ev.target.value)}}
                            placeholder='Digite sua nova senha...'
                        />
                        <button onClick={updatePassword}>Salvar</button>
                    </div>
                </div>
            </section>
        )
    })

 return (
    <ContainerBase>
        <Header/>
        <ContainerMyAccount>
            {renderClient}
        </ContainerMyAccount>
        <NavBar/>
    </ContainerBase>
 );
}