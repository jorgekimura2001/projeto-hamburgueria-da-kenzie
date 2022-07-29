import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: column;
    height: inherit;
    /* min-width: 300px; */
    margin-right: 20px;
    border: 2px solid rgb(var(--color-gray-20));
    border-radius: 5px;

    figure{
        background-color: rgb(var(--color-gray-0));
        width: 300px;
        height: 150px;
    }
    img{
        width: 50%;
    }

    div {
        margin-left: 21px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    div > p:first-of-type{
        margin-top: 26px;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: rgb(var(--color-gray-100));
    }
    div > p + p {
        margin-top: 5px;
        margin-bottom: 14px;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: rgb(var(--color-gray-50));
    }
    div > span{
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: rgb(var(--color-primary));
    }
    button{
        margin-top: 14px;
        margin-left: 21px;
        color: #fff;
        background: rgb(var(--color-primary));
        border: 2px solid rgb(var(--color-primary));
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding: 11.5px 20px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }
` 