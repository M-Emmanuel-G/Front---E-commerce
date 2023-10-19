import React from 'react';
import { ContainerNavbar } from './style';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate = useNavigate()

    const logout = ()=>{
        localStorage.removeItem('isChecked')
        navigate('/login')
    }

    return (
        <ContainerNavbar>
            <img onClick={(()=>{navigate('/MinhaConta')})} alt='Imagem Perfil' src='https://cdn-icons-png.flaticon.com/128/1077/1077063.png'/>
            <img onClick={(()=>{navigate('/Produtos')})} alt='Imagem HomePage' src='https://cdn-icons-png.flaticon.com/128/1946/1946488.png'/>
            <img onClick={(()=>{navigate('/Carrinho')})} alt='Imagem carrinho' src='https://cdn-icons-png.flaticon.com/128/833/833314.png'/>
            <img onClick={logout} alt='Imagem Logout' src='https://cdn-icons-png.flaticon.com/128/126/126467.png'/>
            {/* <img alt='Imagem Perfil' src='https://cdn-icons-png.flaticon.com/128/1077/1077063.png'/>
            <img alt='Imagem HomePage' src='https://cdn-icons-png.flaticon.com/128/1946/1946488.png'/>
            <img alt='Imagem carrinho' src='https://cdn-icons-png.flaticon.com/128/833/833314.png'/>
            <img alt='Imagem Logout' src='https://cdn-icons-png.flaticon.com/128/126/126467.png'/> */}
            
        </ContainerNavbar>
    );
}