import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    img{
        width: 90%;
        height: 2px;
        margin-bottom: 21px;
    }
    section{
        display: flex;
        flex-direction: column;
        width: 90%;
 
        .button-remove-all{
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px;
            background-color: rgb(var(--color-gray-20));
            border: 2px solid rgb(var(--color-gray-20));
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: rgb(var(--color-gray-50));
        }
    }
    .total--cart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
        
        span:first-of-type{
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            color: rgb(var(--color-gray-100));
        }
        span + span {
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            color: rgb(var(--color-gray-50));
        }
    }
    @media (min-width: 768px) {
        img{
            width: 500px;
        }
    }
`