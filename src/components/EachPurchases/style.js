import styled from 'styled-components';

export const ContainerEachPurchase = styled.div`
    width: 300px;
    height: 400px;
    border: 2px solid #000;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.099);
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0.5rem;
    text-align: center;
    span{
        font-size: 0.8rem;
        margin: 1rem 0;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    @media (max-width: 480px){
        flex-direction: column;
    }
`;