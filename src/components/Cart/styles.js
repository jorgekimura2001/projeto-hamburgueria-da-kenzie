import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 8px;

    .cart--title {
        border-radius: 5px 5px 0px 0px;
        background-color: rgb(var(--color-primary));
        width: 97%;
        height: 65px;
        display: flex;
        align-items: center;
        padding: 22px 0 13px 21px;
        margin-top: 30px;
        color: #fff;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
    }
    .cart--none{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 123px;
        width: 97%;
        margin-top: 56px;

        p{
            color: rgb(var(--color-gray-100));
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 5px;
        }
        
        span{
            color: rgb(var(--color-gray-50));
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
        }
    }
    .cart--items{
        background: rgb(var(--color-gray-0));
        border-radius: 0px 0px 5px 5px;
        width: 97%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
    }

    @media (min-width: 375px){
        margin-left: 16px;
        .cart--none{
            height: 223px;
        }
    }
    @media (min-width: 1024px) {
        min-width: 365px;
        margin-left: 65px;
       
        .cart--none{
            margin-top: 0;
        }
    }
`