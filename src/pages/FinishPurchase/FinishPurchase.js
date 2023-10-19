import React from 'react';
import { AnimBar, ContainerBase } from '../../styles/style';
import { ContainerFinishPage } from './style';
import { useNavigate } from 'react-router-dom';

export default function FinishPurchase() {

    const navigate = useNavigate()

    setTimeout(() => {
        document.getElementById('finished').style.display = 'block';
        document.getElementById('animBar').style.display = 'none';
    }, 4000);
    setTimeout(()=>{
        navigate('/Minhas-compras')
    }, 8000)

   return (
        <ContainerBase>
            <ContainerFinishPage>
                <section id='animBar'>
                    <AnimBar/>
                    <h2>Aguarde... Sua compra está sendo finalizada...</h2>
                </section>
                <div id='finished'>
                    <h2>Compra realizada com sucesso...</h2>
                    <span>Seu produto chegará em breve...</span>
                </div>
            </ContainerFinishPage>
        </ContainerBase>
 );
}