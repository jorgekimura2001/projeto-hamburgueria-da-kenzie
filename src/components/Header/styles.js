import styled from "styled-components";

export const HeaderItems = styled.header`
    width: 100%;
    height: 139px;
    background-color: rgb(var(--color-gray-0));
    form{
        background-color: #fff;
        margin: 14px 16px;
        padding: 0px 10px 0px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
    }
    form > button{
        padding: 7px;
        margin: 10px;
        font-size: 14px;
        width: 107px;
        height: 40px;
        background-color: rgb(var(--color-primary));
        color: white;
        border: 2px solid #27AE60;
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
`