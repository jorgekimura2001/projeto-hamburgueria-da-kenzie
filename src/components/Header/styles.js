import styled from "styled-components";

export const HeaderItems = styled.header`
    width: 100%;
    height: 139px;
    background-color: rgb(var(--color-gray-0));
    padding-top: 15px;

    form{
        background-color: #fff;
        margin: 14px 16px;
        padding: 0px 10px 0px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        border: 2px solid rgb(var(--color-gray-20));
        border-radius: 8px;
    }
    form > button{
        padding: 7px;
        margin: 10px;
        font-size: 14px;
        width: 107px;
        height: 40px;
        background-color: rgb(var(--color-primary));
        color: white;
        border: 2px solid rgb(var(--color-primary));
        border-radius: 8px;

    }
    form > input {
        width: 50%;
        border: none;
        outline: none;
    }
    form > input::placeholder {
        color: #E0E0E0;
        font-size: 16px;
    }
    p{
        color: rgba(var(--color-gray-100));
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 14px;

        span{
            font-size: 14px;
            color: rgba(var(--color-secundary));
            font-weight: 600;
        }
    }
    @media (min-width: 1024px){
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 80px;
        padding-top: 0;

        p{
            margin-bottom: 0;
            font-size: 25px;
            span{
                font-size: 18px;
            }
        }
        form{
            margin: 10px 0;
        }
    }
`