import styled from 'styled-components';

export const ContainerNavbar = styled.main`
    width: 100%;
    height: 10%;
    background: #7746E5;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 1200px) and (max-width: 1920px) {
        display: none;
    }
    img{
        width: 30px;
        height: 30px;
    }
`;