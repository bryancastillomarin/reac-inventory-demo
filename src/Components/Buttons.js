import styled from "styled-components";

export const Button = styled.button`
    margin-right: 16px;
    padding: 4px 8px;
    font-size: 12px;
    border: 1px solid #CCC;
    border-radius: 5px;
    cursor: pointer;
`;

export const RefreshButton = styled.button`
    padding: 4px 8px;
    font-size: 14px;
    border: 1px solid #0c3ca5;
    border-radius: 5px;
    background-color: #0d50e0;
    color: #F2F2F2;
    cursor: pointer;
`;

export const DetailsButton = styled(Button)`
    background-color: #e9e51f;
`;

export const ActivateButton = styled(Button)`
    background-color: #41a6ff;
`;

export const InactivateButton = styled(Button)`
    background-color: #ee6728;
`;

export const QuantityButton = styled(Button)`
    background-color: #28ee49;
`;

export const DeleteButton = styled(Button)`
    background-color: #f35656;
`;

export const CreateButton = styled(Button)`
    background-color: #e9e51f;
`;

export const UpdateButton = styled(Button)`
    background-color: #e9e51f;
`;