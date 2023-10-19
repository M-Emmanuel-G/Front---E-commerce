import React from 'react';
import { AnimBar, ContainerBase } from '../../styles/style';
import Header from '../../components/Header/header';
import { ContainerPurchases } from './style';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../URL/URL';
import EachPurchases from '../../components/EachPurchases/purchaseCard';
import NavBar from '../../components/NavBar/navBar';

export default function MyPurchasesPage() {

    const [purchases, isLoading] = useRequestData(`${BASE_URL}/purchases/getPurchases/${localStorage.getItem('idClient')}`)
    const renderPurchases = purchases.map((purchase, key)=>{
        return(
            <EachPurchases
                key={key}
                purchase={purchase}
            />
        )
    })
 return (
    <ContainerBase>
        <Header/>
        <ContainerPurchases>
            {isLoading && <AnimBar/>}
            {!isLoading && renderPurchases}
        </ContainerPurchases>
        <NavBar/>
    </ContainerBase>
 );
}