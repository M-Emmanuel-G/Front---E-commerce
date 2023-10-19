import styled from 'styled-components';

export const ContainerRecPass = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    flex-direction: column;
    img{
        width: 300px;
        height: 40%;
    }
    
`;

export const ContainerVerifyEmail = styled.form`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
   
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
`
export const ContainerFormRec = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerError = styled.section`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    span{
        color:'#fc030f'
    }
`