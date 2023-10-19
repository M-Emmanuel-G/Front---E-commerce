import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/header';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase } from '../../styles/style';
import { BASE_URL } from '../../URL/URL';
import { ContainerAction, ContainerEachProduct, ContainerImg, ContainerInfo, ContainerReturnInfo, ContainerTittle } from './style';
import NavBar from '../../components/NavBar/navBar';

export default function EachProduct() {


    const [qtd, setQtd] = useState(1)
    const [info, setInfo] = useState('')
    const [ product ] = useRequestData(`${BASE_URL}/products/getProduct/${localStorage.getItem('product')}`)

    const addQtd = ()=>{
        if(qtd === 5){
            setQtd(5)
        }
        else{
            setQtd(qtd + 1)
        }
    }

    const removeQtd = ()=>{
        if(qtd === 1) {
            setQtd(1)
        }
        else{
            setQtd(qtd - 1)
        }
    }

    const addCart = (idProduct)=>{
        const body = {
            qtdPurchase: qtd,
            idProduct: idProduct,
            idClient:localStorage.getItem('idClient')
        }

        axios
            .post(`${BASE_URL}/cart/addCart`, body)
            .then((res)=>{
                setInfo(res.data.message);
            })
            .catch((err)=>{console.log(err.response.data);})
    }


    const renderProduct = product.map((product, key)=>{
        
        return(
            <section key={key}>
                <ContainerTittle>
                    <h5>{product.product}</h5>
                </ContainerTittle>
                <ContainerImg>
                    <img alt='Imagem do produto' src={product.product_img}/>
                </ContainerImg>
                <ContainerInfo>
                    <span>{product.product_description}</span>
                </ContainerInfo>
                <ContainerReturnInfo>
                    <span>{info}</span>
                </ContainerReturnInfo>
                <ContainerAction>
                    <section>
                        <span> Quantidade:</span>
                        <button onClick={removeQtd}>-</button>
                        <input
                            value={qtd}
                            onChange={(ev)=>{setQtd(ev.target.value)}}
                        />
                        <button onClick={addQtd}>+</button>
                    </section>
                    <span>R$ {Number(product.product_price).toFixed(2)} á vista</span>
                    <button onClick={()=>{addCart(product.id_product)}}>Adicionar ao Carrinho</button>
                </ContainerAction>
            </section>
        )
    }) 



 return (
    <ContainerBase>
        <Header/>
        <ContainerEachProduct>
            {renderProduct}
        </ContainerEachProduct>
        <NavBar/>
    </ContainerBase>
 );
}