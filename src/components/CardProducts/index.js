import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../URL/URL';
import { ActionCard, ButtonCard, ContainerCardProduct, ImgCard, PriceCard, TittleCard } from './style';

export default function CardProducts(props) {

    const navigate = useNavigate('/produto')

    const eachProduct = ()=>{
        navigate('/produto')
        localStorage.setItem('product', props.product.id_product)
    }


 return (
    <ContainerCardProduct onClick={eachProduct}>
        <ImgCard>
            <img src={props.product.product_img}/>
        </ImgCard>
        <TittleCard>
            <span >{props.product.product}</span>
        </TittleCard>
        <PriceCard>
            <p>RS {Number(props.product.product_price).toFixed(2)} <span>10x sem jurus</span></p>
        </PriceCard>
        <ButtonCard>
            <button> Adicionar ao carrinho</button>
        </ButtonCard>
    </ContainerCardProduct>
 );
}