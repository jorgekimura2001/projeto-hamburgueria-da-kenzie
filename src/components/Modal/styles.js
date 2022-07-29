import styled from "styled-components";

export const ContainerModal = styled.div`
    background-color: rgba(var(--color-gray-50),.5);
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    div{
        background-color: aquamarine;
    }
    button{
        background:none;
    }
`