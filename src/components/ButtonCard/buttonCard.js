import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../URL/URL';
import { ContainerButton, QuantityCart } from './style';

export default function ButtonCard() {

   const navigate = useNavigate()

   const [cart, isLoading] = useRequestData(`${BASE_URL}/cart/getCart/${localStorage.getItem('idClient')}`)
   
   const qtdCart = cart.map((cart)=>{ 
      return cart
      
   })
   return (
      <ContainerButton onClick={()=>{navigate("/Carrinho")}}>
         <img alt='Foto do Carrinho' src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-shopping-cart-png-image_3686555.jpg'/>
         <QuantityCart>
            {isLoading && 'carregando'}
            {!isLoading && <span>{qtdCart.length}</span>}
         </QuantityCart>
      </ContainerButton>
   );
}