import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow-x: scroll;
    height: 346px;
    margin-top: 15px;
    margin-left: 8px;

    @media (min-width: 375px){
        margin-left: 16px;
    }
    @media (min-width: 1024px){
        justify-content: center;
        flex-flow: row wrap;
        overflow-x: initial;
        margin-top: 32px;
        margin-left: 0;
    }
`
