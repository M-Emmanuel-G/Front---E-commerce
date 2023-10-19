import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerHeader, ContainerLogo, ContainerMobile } from './style';
import ImgLogo from '../../images/online-shop.jpg'

export default function Header() {
    const navigate = useNavigate()

    const menuMobile = ()=>{
        if(document.getElementById('menuMobile').style.display === 'flex'){
            document.getElementById('menuMobile').style.display = 'none'
        }else{
            document.getElementById('menuMobile').style.display = 'flex'
        }
    }
    const logout = ()=>{
        localStorage.removeItem('isChecked')
        navigate('/login')
    }
    

 return (
    <ContainerHeader>
        <ContainerLogo>
            <img onClick={()=>{navigate('/Produtos')}} src={ImgLogo}/>
        </ContainerLogo>
            <img onClick={menuMobile} src='https://friconix.com/png/fi-xwluxx-three-bars-wide.png'/>
        <nav>
            <ul>
                <li onClick={()=>{navigate('/Produtos')}}>Produtos</li>
                <li onClick={()=>{navigate('/MinhaConta')}}>Minha conta</li>
                <li onClick={()=>{navigate('/Minhas-Compras')}}>Minhas Compras</li>
                {/* <li onClick={logout}>Sair</li> */}
            </ul>
        </nav>
        <ContainerMobile id='menuMobile'>
            <nav>
                <ul>
                    <li onClick={()=>{navigate('/Produtos')}}>Produtos</li>
                    <li onClick={()=>{navigate('/Minhas-Compras')}}>Minhas Compras</li>
                    <li onClick={()=>{navigate('/MinhaConta')}}>Minha conta</li>
                    <li onClick={logout}>Sair</li>
                </ul>
            </nav>
        </ContainerMobile>
    </ContainerHeader>
 );
}