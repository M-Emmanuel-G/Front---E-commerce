import styled from 'styled-components';

export const ContainerHeader = styled.header`
    width:100%;
    height:10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        margin-right: 1rem;
    }
    nav{
        width: 100%;
        height: 100%;
        display: none;
        ul{
            width: 100%;
            height: 100%;
            display:flex;
            justify-content: space-evenly;
            align-items: center;
            list-style-type: none;
        }
    }
    @media (max-width: 480px) {
        display: none;
    }
`;

export const ContainerLogo = styled.div`
    width: 30%;
    height: 100%;
    img{
        width: 100px;
        height: 100%;
    }
`

export const ContainerMobile = styled.div`  
    width: 100%;
    height:200px;
    display: none;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0,0,0,0.5);
    position:absolute;
    top: 65px;
    img{
        width: 50px;
        height: 50px;
        margin: 0 1rem;
        display: none;
    }
    nav{
        width: 100%;
        height: 200px;
        display: flex;
        ul{
            display: flex;
            flex-direction:column;
            color:#fff;
            li{
                width: 200px;
                display: flex;
                justify-content: center;
                /* border-bottom: 1px solid #000; */
            }
        }
    }
`

export const ContainerDesktop = styled.div`
    width: 70%;
    height: 100%;
    background: red;
    display: flex;

`