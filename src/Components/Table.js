import styled from "styled-components";

const Table = styled.table`
    width: 100%;
    margin-top: 16px;
    border-collapse: collapse;

    & th {
        padding: 12px 8px;
        text-align: left;
        background-color: #078a5a;
        color: #F2F2F2;
        border: 1px solid #DDD;
    }

    & td {
        border: 1px solid #DDD;
        padding: 8px;
    }

    & tr:nth-child(even) {
        background-color: #F2F2F2;
    }

    & tr:nth-child(odd) {
        background-color: #DDD;
    }

    & tr:hover {
        background-color: #DDD;
    }
`;

export default Table;