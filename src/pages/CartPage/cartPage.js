import axios from 'axios';
import React from 'react';
import Header from '../../components/Header/header';
import useRequestData from '../../hooks/useRequestData';
import { AnimBar, ContainerBase } from '../../styles/style';
import { BASE_URL } from '../../URL/URL';
import { ContainerBalance, ContainerCart, EachProduct, InfoCart } from './style';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/navBar';

export default function CartPage() {
    const navigate = useNavigate()

    const [cart, isLoading,  page, setPage] = useRequestData(`${BASE_URL}/cart/getCart/${localStorage.getItem('idClient')}`)
    const balance = cart.map((cart)=>{ return cart.product_price * cart.qtd_purchase}).reduce((a,  b)=> a + b, 0)
    
    const accomplishPayment = ()=>{
        const ids = cart.map((product)=>{
            return {
                qtdPurchase: product.qtd_purchase,
                idProd: product.id_product,
            }
        })

        ids.forEach(product => {
            axios
                .post(`${BASE_URL}/purchases/makePurchase/${localStorage.getItem('idClient')}/${product.idProd}/${product.qtdPurchase}` )
                .then((res)=>{
                    navigate('/Finalizando-Compra')
                    axios
                        .delete(`${BASE_URL}/cart/clearCart/${localStorage.getItem('idClient')}`)
                        .then((res)=>{})
                        .catch((err)=>{console.log(err.response.data);})
                })
                .catch((err)=>{console.log(err.response.message);})
        });

    }
    
    const removeCart = (idCart)=>{
        axios
            .delete(`${BASE_URL}/cart/removeItemCart/${idCart}`)
            .then((res)=>{
                setPage(!page)
            })
            .catch((err)=>{alert(err.response.data)})
    }
    
    const renderCart = cart && cart.map((cart, key)=>{
        return(
            <EachProduct key={key}>
                <div>
                    <img alt='Foto do Produto' src={cart.product_img}/>
                </div>
                <div>
                    <span>{cart.product}</span>
                </div>    
                <div>
                    <span>{cart.qtd_purchase}un</span>
                </div>
                <div>
                    <span>R${cart.product_price.toFixed(2)}</span>
                </div>
                <div>
                    <img alt='Foto deletar item do carrinho' src='https://cdn-icons-png.flaticon.com/128/1828/1828851.png' onClick={()=>{removeCart(cart.cart_id)}}/>
                </div>
            </EachProduct>
        )
    })


    return (
        <ContainerBase>
            <Header/>
            <ContainerCart>
                <InfoCart>
                    {isLoading && <AnimBar/>}
                    {!isLoading && renderCart}
                </InfoCart>
            <ContainerBalance>
                <span>Valor Total: {Number(balance).toFixed(2)}</span>
                <button onClick={accomplishPayment}>Finalizar Compra</button>
            </ContainerBalance>
            </ContainerCart>
            <NavBar/>
        </ContainerBase>
    );
}