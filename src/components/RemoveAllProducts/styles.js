import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    width: 100%;
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    inset: 0;

    background-color: rgba(0,0,0,.5);
    
    .modal-box{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: rgb(var(--color-gray-20));
        padding: 10px;
        border-radius: 8px;

        p{
            text-align: start;
            font-size: 16px;
            color: rgb(var(--color-gray-100));
            font-weight: 600;
        }

        span{
            font-size: 12px;
            text-align: start;
        }
    }
    .button-container{
        display: flex;
        justify-content: space-around;

        button{
            padding: 5px;
            border-radius: 5px;
        }
        button:first-of-type{
            background-color: rgb(var(--color-secundary));
            color: white;
        }
        button + button{
            background-color: rgb(var(--color-primary));
            color: white;
        }

    }
    .button-close{
        border-radius: 100%;
        top: -14px;
        background: rgb(var(--color-gray-20));
        position: absolute;
        right: 8px;
        height: 25px;
        width: 25px;
        color: rgb(var(--color-gray-100));
    }
`