import styled from 'styled-components';

export const ContainerCardProduct = styled.main`
    width: 200px;
    height: 500px;
    background: #06050D;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0.2rem 0.3rem;
    border-radius: 12px;
`;

export const TittleCard = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items:center;
    text-align: center;
    flex-direction:column;
    span{
        font-size:1rem;
        transition: color .3s;
        :hover{
            color: red;
        }
    }
    p{
        font-size:0.8rem
    }
`

export const ImgCard = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;

    img{
        width: 100%;
        height: 90%;
    }
    :after{
            content: "";
            width: 100%;
            height: 1px;
            display: flex;
            background: #000;
        }
`

export const ActionCard = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input{
        width: 50px;
        text-align: center;
    }

    input, button{
        margin:0 0.1rem;
        background: 0;
        border: 0;
    }

    button{
        background: 0;
        border:0;
        font-size: 2rem;
}
`

export const PriceCard = styled.div`
    width:100%;
    height:10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p{
        font-size:19px;
        font-weight:bold;
    }
    span{
        font-size: 12px;
    }
`

export const ButtonCard = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items:flex-end;
    button{
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        color:#fff;
        width: 100%;
        height: 50%;
        background: #7746E5;
        border:0;
    }
`