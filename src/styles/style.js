import styled, { keyframes } from 'styled-components';

export const ContainerBase = styled.main`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background: #06050D;
    color:#fff;
`;

export const AnimLoading = keyframes`
    100%{transform: rotate(1turn)}
`

export const AnimBar = styled.div`
    width: 50px;
    height: 50px;
    display: grid;
    animation: ${AnimLoading} 1s infinite;
    ::before,
    ::after {    
        content:"";
        grid-area: 1/1;
        border:8px solid;
        border-radius: 50%;
        border-color:#7746E5 transparent #7746E5 transparent;
        mix-blend-mode: darken;
        animation: 1s infinite linear;
   }
    ::after {
        border-color: #7746E5 transparent #7746E5 transparent;
        animation-direction: reverse;
   }

`

export const ContainerError = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        color: #f50202;
        font-size: 1rem;
    }
`