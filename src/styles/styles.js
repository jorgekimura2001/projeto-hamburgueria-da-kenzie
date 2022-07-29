import styled from "styled-components";

export const Container = styled.div`
    justify-content: start;
    text-align: start;
    width: 95%;
    display: flex;
    margin: 30px 0 41px 8px;

    p{
        color: rgb(var(--color-gray-100));
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;

        span{
            color: rgb(var(--color-gray-50));
            font-weight: 700;
            font-size: 24px;
            line-height: 34px;
        }
    }
    @media (min-width: 375px){
        margin-left: 16px;
    }
`