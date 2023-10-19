import styled from 'styled-components';

export const ContainerError = styled.section`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-weight: 1rem;
    }
`
//----------------------------------------------------------------------------------------------------------------------------------------//

export const ContainerAdmin = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

//----------------------------------------------------------------------------------------------------------------------------------------//

export const ContainerLogo = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    img{
        width: 10%;
        height: 100%;
    }
    section{
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content:flex-end;
        img{
            width: 30px;
            height: 30px;
            margin: 0 1.5rem;
        }
    }
    `
//----------------------------------------------------------------------------------------------------------------------------------------//

export const ContainerServices = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
`

export const ContainerProducts = styled.div`
    width:30%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const CardInfo = styled.div`
    width: 100%;
    height: 20%;
    background-image: yellow;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const ContainerAddPrducts = styled.div`
    width: 100%;
    height: 80%;
    text-align: center;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        align-items: center;
        button, input{
            border-radius: 10px;
        }
        input{
            width: 300px;
            height: 30px;
            margin: 1rem 0;
            text-align: center;
            font-size: 1rem;
            outline: 0;
            border: 0;
            ::placeholder{
                text-align:center;
                font-weight: bold;
            }
        }
        select{
            width: 300px;
            height: 30px;
            text-align: center;
            margin-top: 1rem;
        }
        button{
            width: 300px;
            height: 30px;
            margin: 1rem 0;
            background: #7746E5;
            border: 0;
            color: #fff;
            font-weight: bold;
        }
    }
`

