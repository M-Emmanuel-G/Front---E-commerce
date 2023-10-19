import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase } from '../../styles/style';
import { BASE_URL } from '../../URL/URL';
import { ContainerLogin, ContainerkeepConnected, Login } from './style';
import { IsChecked } from '../../hooks/isChecked';
import ImgLogo from '../../images/online-shop.jpg'
import Input from '../../components/Input/Input';
import InputPassword from '../../components/InputPassword/inputPass';

export default function LoginPage() {

    const navigate = useNavigate()

    const [ info, setInfo] = useState('')
    const [ cpf, setCpf] = useState('')
    const [ password, setPassword] = useState('')
    const [ keepConect, setKeepConect] = useState(false)

    IsChecked()
        
    const login = (ev)=>{
        ev.preventDefault()
        const body = {
            cpf,
            password
        }

        axios
            .post(`${BASE_URL}/clients/login`, body)
            .then((res)=>{

                const typeClient = res.data.result[0].client_type

               if( typeClient === 'Admin' ){
                    
                    localStorage.setItem('cpf', cpf)
                    localStorage.setItem('idClient', res.data.result[0].client_id)
                    console.log(res.data.result[0].client_id);
                    navigate('/admin')
               }

               if( typeClient === 'User'){
                    localStorage.setItem('cpf', cpf)
                    localStorage.setItem('idClient', res.data.result[0].client_id)
                    navigate('/produtos')
               }
            })
            .catch((err)=>{
                setInfo(err.response.data)
            })
    }

    const keepConeccted = ()=>{
        const isChecked = document.getElementById('checkbox').checked
        isChecked === false ? localStorage.removeItem('isChecked') : localStorage.setItem('isChecked', isChecked)
    }


 return (
    <ContainerBase>
        <ContainerLogin>
            <Login onSubmit={login}>
            <img src={ImgLogo}/>
            <Input
                img='https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png'
                maxLength = {11}
                value = {cpf}
                onChange={(ev)=>{setCpf(ev.target.value)}}
                placeholder='CPF'
            />
            <Input
                img='https://www.nicepng.com/png/detail/207-2073115_font-password-comments-password-icon-png-transparent.png'
                    maxLength={6}
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                    placeholder='Senha'
                    type='password'
            />  
                <span>{info}</span>
                <ContainerkeepConnected>
                    <input
                        id='checkbox'
                        type='checkbox'
                        value={keepConect}
                        onChange={(ev)=>{setKeepConect(ev.target.value)}}
                        onClick={keepConeccted}
                    />
                    <span>Manter conectado?</span>
                </ContainerkeepConnected>
            <section>
                <button>Acessar</button>
                <button type='button' onClick={(()=>{navigate('/signup')})}>Registre-se</button>
            </section>
            <p>Esqueceu sua senha? <a onClick={()=>{navigate('/Verificar-email')}} href=''>Clique Aqui</a> </p>
            </Login>
        </ContainerLogin>
    </ContainerBase>
 );
}