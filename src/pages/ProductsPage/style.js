import styled from 'styled-components';

export const ContainerProducts = styled.main`
    width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    justify-content:center;
    align-items: center;
`;

export const ContainerBanner = styled.section`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 70%;
        height: 100%;
    }
`

export const ContainerCategories = styled.main`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 480px){
        justify-content:center;     
        div{
            input{
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;
            }
        }
    }

    div{
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
            width: 30px;
            height: 30px;
            background: #fff;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }
        input{
            width: 200px;
            height: 30px;
            outline: 0;
            border: 0;
        }
    }
    
`