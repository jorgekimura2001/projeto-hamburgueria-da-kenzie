import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
        width: 200px;
    }
    section{
        display: flex;
        flex-direction: column;
    }
    section > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`