import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerError } from '../../styles/style';
import { BASE_URL } from '../../URL/URL';
import { ContainerSignup, Signup } from './style';
import Logo from '../../images/online-shop.jpg'

export default function SignUpPage() {

    const navigate = useNavigate()

    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ cpf, setCPF ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ err, setErr ] = useState('')

    const signup = (ev)=>{
        ev.preventDefault()

        const body = {
            nameClient: name,
            phoneClient:phone,
            cpfClient:cpf,
            emailClient:email,
            passwordClient:password
        }

        axios
            .post(`${BASE_URL}/clients/signup`, body)
            .then((res)=>{
                setErr(res.data.message)
                navigate('/login')
            })
            .catch((err)=>{
                setErr(err.response.data)
            })
    }


 return (
    <ContainerBase>
        <ContainerSignup>
            <Signup onSubmit={signup}>
            <img src={Logo}/>
            <ContainerError>
                <span>{err}</span>
            </ContainerError>
                <h4>Crie sua conta</h4>

                <input
                    required
                    value={name}
                    onChange={(ev)=>{setName(ev.target.value)}}
                    type="text"
                    placeholder='Nome Completo'
                />
                <input
                    required
                    minLength={6}
                    maxLength={6}
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                    placeholder='Senha'
                    type='password'
                />
                <input
                    required
                    type='email'
                    value={email}
                    onChange = {(ev)=>{setEmail(ev.target.value)}}
                    placeholder='Email'
                />
                <input
                    required
                    maxLength={11}
                    value={cpf}
                    onChange = {(ev)=>{setCPF(ev.target.value)}}
                    placeholder='CPF'
                />
                <input
                    required
                    value={phone}
                    onChange = {(ev)=>{setPhone(ev.target.value)}}
                    placeholder='Telefone'
                />
            <section>
                <button type='button' onClick={()=>{navigate('/login')}}>Cancelar</button>
                <button>Criar Conta</button>
            </section>
            </Signup>
        </ContainerSignup>
    </ContainerBase>
 );
}