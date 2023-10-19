import styled from 'styled-components';

export const ContainerEachProduct = styled.main`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    section{
        width: 100%;
        height: 100%;
    }
    @media (max-width:480px) {
        span{
            font-size: 0.8rem;
        }
    }
`;

export const ContainerTittle = styled.div`
    width:100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerImg = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    img{
        width: 30rem;
        height: 100%;
    }
    @media (max-width:480px) {
        height: 20%;
        img{
            width: 60%;
        }
    }
`

export const ContainerInfo = styled.div`
    width: 100%;
    height: 10%;
    text-align: center;
`

export const ContainerAction = styled.div`
    width: 100%;
    height:25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:18px;
    span{
        display: flex;
    }
    p{
        font-size: 18px ;
    }
    button{
        width: 270px;
        height: 40px;
        margin:1rem 0;
        background: #7746E5;
        color: #fff;
        border:0;
        border-radius: 12px;
    }
    section{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        margin-top: 2rem;
        button{
            width: 30px;
            height: 30px;
            background: 0;
            color:#fff;
        }
        input{
            width: 30px;
            height: 30px;
            text-align:center;
            border:0;
            background: 0;
            color: #fff;
        };
    }
`

export const ContainerReturnInfo = styled.div`
    width: 100%;
    height: 10%;
    text-align: center;
    display: flex;
    align-items: end;
    justify-content: center;
    span{
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    @media (max-width:480px) {
        height: 25%;
    }
`