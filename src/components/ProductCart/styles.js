import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-bottom: 21px;
    
    img{
        width: 80px;
        height: 80px;
        border-radius: 5px;
        background-color: rgb(var(--color-gray-20));
        margin-right: 10px;
    }
    .info--product{
        margin-right: 32px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 114px;

        p:first-of-type{
            text-align: start;
            color: rgb(var(--color-gray-100));
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
        }
        p + p {
            color: rgb(var(--color-gray-50));
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
        }

    }
    button{
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        width: 51px;
        display: flex;
        align-items: flex-start;
        background: none;
    }

    @media (min-width: 768px) {
        .info--product{
            width: 360px;
        }
    }
    /* @media (min-width: 1024px){
        &:hover{
            transform: scale(1.1)
        }
    } */
`