import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    width: 100%;
    min-height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;

    background-color: rgba(0,0,0,.5);
    
    .modal-box{
        position: relative;
        background-color:  rgb(var(--color-secundary));
        padding: 10px;
        border-radius: 5px;

        p{
        color: rgb(var(--color-gray-100));
        font-size: 16px;
        font-weight: 500;
        }
    }
    .button-close{
        border-radius: 100%;
        top: -12px;
        background: rgb(var(--color-secundary));
        position: absolute;
        right: -4px;
        height: 25px;
        width: 25px;
    }
`