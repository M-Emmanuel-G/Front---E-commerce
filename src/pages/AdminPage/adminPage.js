import React, { useState } from 'react';
import { ContainerBase } from '../../styles/style';
import { CardInfo, ContainerAddPrducts, ContainerAdmin, ContainerError, ContainerLogo, ContainerProducts, ContainerServices } from './style';
import ImgLogo from '../../images/online-shop.jpg'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../URL/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {

    const [product, setProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [urlImage, setUrlImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [info, setInfo]= useState('')
    const navigate = useNavigate()

    const [products, isloading,  page, setPage] = useRequestData(`${BASE_URL}/products/getAllProducts`)

    const logout = ()=>{
        navigate('/login')
        localStorage.removeItem('idClient')
        localStorage.removeItem('cpf')
    }

    const addProduct = (ev)=>{
        ev.preventDefault()

        const body = {
            product: product,
            productPrice: price,
            productImg: urlImage,
            productDescription: description,
            productCategory: category
        }

        axios
            .post(`${BASE_URL}/products/addProducts`, body)
            .then((res)=>{
                setInfo(res.data);
                setPage(!page)
                setCategory('')
                setDescription('')
                setPrice('')
                setProduct('')
                setUrlImage('')
            })
            .catch((err)=>{
                setInfo(err.response.data);
            })
    }

    return (
        <ContainerBase>
            <ContainerAdmin>
                <ContainerLogo>
                    <img src={ImgLogo}/>
                    <section>
                        <img onClick={logout} src='https://cdn-icons-png.flaticon.com/128/12078/12078788.png'/>
                    </section>
                </ContainerLogo>
                <ContainerServices>
                    <ContainerProducts>
                        <CardInfo>
                            <span>{products.length} produtos Cadastrados</span>
                        </CardInfo>
                        <ContainerAddPrducts>
                            <h4>Cadastrar novos produtos</h4>
                            <form onSubmit={addProduct}> 
                                <input
                                    placeholder='Produto'
                                    value={product}
                                    onChange={(ev)=>{setProduct(ev.target.value)}}
                              />
                                <input
                                    placeholder='valor'
                                    value={price}
                                    onChange={(ev)=>{setPrice(ev.target.value)}}
                                    type='number'
                              />
                                <input
                                    placeholder='imagem/foto(URL)'
                                    value={urlImage}
                                    onChange={(ev)=>{setUrlImage(ev.target.value)}}
                              />
                                <input
                                    placeholder='descricao'
                                    value={description}
                                    onChange={(ev)=>{setDescription(ev.target.value)}}
                                    maxLength={250}
                              />
                              <select
                                value={category}
                                onChange={(ev)=>{setCategory(ev.target.value)}}
                              >
                                <option>Escolha a categoria</option>
                                <option>Eletrônicos</option>
                              </select>
                              <ContainerError>
                                <span>{info}</span>  
                              </ContainerError>
                              <button>Cadastrar produto</button>
                            </form>
                        </ContainerAddPrducts>
                    </ContainerProducts>
                </ContainerServices>
            </ContainerAdmin>
        </ContainerBase>
 );
}