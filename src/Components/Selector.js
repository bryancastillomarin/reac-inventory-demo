import styled from "styled-components";

const Selector = styled.select`
    padding: 2px 8px;
    font-size: 14px;
    border: 1px solid #aaa;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;

export default Selector;