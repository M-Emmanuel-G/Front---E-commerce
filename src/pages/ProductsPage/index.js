import ButtonCard from "../../components/ButtonCard/buttonCard"
import CardProducts from "../../components/CardProducts"
import Header from "../../components/Header/header"
import useRequestData from "../../hooks/useRequestData"
import { AnimBar, ContainerBase } from "../../styles/style"
import { BASE_URL } from "../../URL/URL"
import { ContainerBanner, ContainerCategories, ContainerProducts } from "./style"
import { useState } from "react"
import ImgDesc from '../../images/Desc.png'
import NavBar from "../../components/NavBar/navBar"

export const ProductsPage = ()=>{

const [products, isLoading, ] = useRequestData(`${BASE_URL}/products/getAllProducts`)
const [search, setSearch] = useState('')

const renderProducts = products && products
    .filter((product)=>{return product.product.includes(search)})
    .map((product, key)=>{
    return(
        <CardProducts
            key={key}
            product = {product}
        />
    )
})

    return(
        <ContainerBase>
            <ContainerProducts>
            <Header/>
            <ContainerCategories>
                <div>
                    <img alt="Imagem de busca / Pesquisa" src="https://cdn-icons-png.flaticon.com/128/12048/12048671.png"/>  
                    <input
                        placeholder="Busca..."
                        value={search}
                        onChange={(ev)=>{setSearch(ev.target.value)}}
                    />
                </div>
            </ContainerCategories>
            <ContainerBanner>
                <img alt="Imagem de banner de desconto" src={ImgDesc}/>
            </ContainerBanner>
            <ContainerProducts>
                {isLoading && <AnimBar/>}
                {!isLoading && renderProducts}
            </ContainerProducts>
            <ButtonCard/>
            </ContainerProducts>
            <NavBar/>
        </ContainerBase>
    )
}