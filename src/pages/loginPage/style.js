import styled from 'styled-components';

export const ContainerLogin = styled.main`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Login = styled.form`
    width: 400px;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    div{
        width: 280px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:12px;
        margin:1rem 0;
        background: #fff;
        input{
            width: 200px;
            height: 40px;
            margin: 1rem 1rem;
            outline:0;
            background:0;
            text-align: center;
            border: 0;
        }   
    }
    span{
        margin:1rem 0;
        color:red;
    }
    img{
        width: 100%;
    }
    p{
        font-size: 12px;
    }
    
    section{
        button{
            margin:0 1rem;
            width: 120px;
            height: 40px;
            border-radius: 12px;
            background: #7746E5;
            color:#fff;
            border: 0;
        }
    }
    p{
            margin-top: 1rem;
        }
`
export const ContainerkeepConnected = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content:center;
    align-items:center;
    input{
        width: 20px;
        height: 20px;
    }
    span{
        color: #fff;
        margin-left: 2rem;
    }
`