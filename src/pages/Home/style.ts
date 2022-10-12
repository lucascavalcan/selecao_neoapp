import styled from "styled-components";

export const Container = styled.div`


    .listItem {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 50px;

        @media (max-width: 1120px) {
            grid-template-columns: repeat(3, 1fr);
        }

    }

    @media (max-width: 900px) {
        margin-left: 50px;
    }
`;