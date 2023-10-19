import React from 'react';
import { ContainerBase } from '../../styles/style';
import { ContainerNotFound } from './style';
import Header from '../../components/Header/header';

export default function NotFoundPage() {
 return (
    <ContainerBase>
        <Header/>
        <ContainerNotFound>
            <img src='https://blog.fluidui.com/assets/images/posts/imageedit_1_9273372713.png'/>
            <h2>Ops... Algo deu errado!</h2>
            <span>Página não encontrada</span>

        </ContainerNotFound>
    </ContainerBase>
 );
}