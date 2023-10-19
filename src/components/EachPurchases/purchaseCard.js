import React from 'react';
import { ContainerEachPurchase } from './style';

export default function EachPurchases(props) {
    return (
        <ContainerEachPurchase>
            <span>{props.purchase.product}</span>
            <div>
                <span>{props.purchase.purchase_date}</span>
                <span>{props.purchase.purchase_qtd} un.</span>
                <span>R$ {(props.purchase.product_price.toFixed(2)*props.purchase.purchase_qtd)}</span>
            </div>
            <label>Entrega até o dia: </label>
            <span>{props.purchase.purchase_delivery}</span>
            <label>Status da entrega: </label>
            <span>{props.purchase.purchase_status}</span>
        </ContainerEachPurchase>
    );
}