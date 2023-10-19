import styled from 'styled-components';

export const ContainerInput = styled.div`
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    input{
        width: 240px;
        height: 30px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 0;
        outline: 0;
    }
    div{
        width: 40px;
        height: 30px;
        background: #fff;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        img{
            width: 30px;
            height: 30px;
        }
    }
`;