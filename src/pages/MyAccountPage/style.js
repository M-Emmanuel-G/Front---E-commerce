import styled from 'styled-components';

export const ContainerMyAccount = styled.main`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    section{
        width: 100%;
        height: 20%;
        border: 2px solid #000;
        margin-top: 2rem;
        div{
            width: 40%;
            display: flex;
            justify-content: space-between;
            @media (max-width: 480px){
                width: 100%;
            font-size: 0.8rem;
        }   
            label{
                font-weight: bold;
            }
            button{
                width: 90px;
                border-radius: 12px;
                border:0;
                background: #7746E5;
                color:#fff;
            
            }
            div{
                width: 300px;
                display: flex;
                opacity: 0;
                input{
                    width: 200px;
                    outline: 0;
                    border-radius: 10px;
                    text-align: center;
                }
                button{
                    width: 90px;
                    border-radius: 12px;
                    border:0;
                    background: #7746E5;
                    color:#fff;
                }
                @media (max-width: 480px){
                    flex-direction: column;
                    button{
                        width: 200px;
                    }
                }   
            }
        }
    }
`;