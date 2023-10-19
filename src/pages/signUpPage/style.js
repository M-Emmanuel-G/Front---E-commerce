import styled from 'styled-components';

export const ContainerSignup = styled.main`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Signup = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    span{
        font-size: 12px;
        color:red;
        position: relative;
        top: 20px ;
    }
    img{
        width: 300px;
        height: 30%;
    }
        input{
            width: 270px;
            height: 30px;
            outline:0;
            text-align: center;
            margin-top: 1rem;
            border-radius: 12px;
            font-size: 1rem;
            color: #000;
            ::placeholder{
                font-weight: bold;
                font-size: 1rem;
            }
        }
        
    section{
        width: 100%;
        display: flex;
        justify-content: center;
        button{
            width: 110px;
            height: 30px;
            margin: 2rem 1rem;
            border-radius: 12px;
            background: #7746E5;
            border: 0;
            color: #fff;
        }
    }
`