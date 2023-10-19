import styled from 'styled-components';

export const ContainerButton = styled.main`
    width: 60px;
    height: 60px;
    background: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    flex-direction: column;
    bottom: 15px;
    right: 15px;
    border: 1px solid #fff;
    border-radius: 50%;
    img{
        width: 50px;
        height: 50%;
        mix-blend-mode: multiply;
    }
    @media (max-width:480px) {
        display: none;
    }
`;

export const QuantityCart = styled.div`
    width: 50%;
    height: 30%;
    background: #7746E5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    span{
        color:#fff;
    }
`