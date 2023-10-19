import styled from 'styled-components';

export const ContainerCart = styled.main`
    width: 100%;
    height: 90%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`
export const InfoCart = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const EachProduct = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.1);
    margin-top: 1rem;
    span{
        font-size: 0.8rem;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-around;
        img{
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
    }
    @media (max-width: 480px){
      width: 90%;
      height: 150px ;
      flex-direction: column;
      justify-content: space-evenly;
      
    }
   
`
export const ContainerBalance = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    span{
        font-size: 15px;
        font-weight: bold;
    }

    button, span{
        margin:0 0.5rem;
    }
    button{
        width: 300px;
        height: 50px;
        background: 0;
        border: 0;
        border-radius: 12px;
        background: #13fa02;
    }
    @media (max-width: 480px){
        button{
            width: 150px;
        }
        span{
            font-size: 1rem;
        }
    }
`