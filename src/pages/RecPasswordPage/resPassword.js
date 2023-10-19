import React, { useState } from 'react';
import { ContainerBase } from '../../styles/style';
import { ContainerAction, ContainerError, ContainerFormRec, ContainerRecPass, ContainerVerifyEmail } from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../URL/URL';
import  emailjs  from '@emailjs/browser';
import Logo from '../../images/online-shop.jpg'
import Input from '../../components/Input/Input';

export default function RecPasswordPage() {

    const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState('')

    const sendRecPass = (ev)=>{
        ev.preventDefault()

        const body = {
            email
        }
        axios
            .post(`${BASE_URL}/clients/changePass`, body)
            .then((res)=>{
                alert(res.data.message)
                navigate('/login')
                const templateMessage = {
                    email,
                    newPassword: res.data.result
                }
                emailjs.send('service_25vayr4', 'template_12p0cbn', templateMessage, '5ZxPWFsvg_-WP62gn')
            })
            .catch((err)=>{
                setError(err.response.data);
            })
    }

return (
    <ContainerBase>
        <ContainerRecPass>
            <img src={Logo}/>
            <ContainerVerifyEmail onSubmit={sendRecPass}>
                <ContainerFormRec>
                    <h3>Recupere sua senha:</h3>
                    <Input
                        img='https://cdn-icons-png.flaticon.com/128/646/646094.png'
                        value={email}
                        onChange = {(ev)=>{setEmail(ev.target.value)}}
                    />
                </ContainerFormRec>
                <ContainerError>
                    <span>{error}</span>
                </ContainerError>
                <section>
                    <button type='button' onClick={()=>{navigate('/login')}}>voltar</button>
                    <button>Enviar email</button>
                </section>
            </ContainerVerifyEmail>
        </ContainerRecPass>
    </ContainerBase>
);
}