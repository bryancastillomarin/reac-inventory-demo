import styled from "styled-components";
import Selector from "./Selector";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px;
`;

export const FormActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const FormLabel = styled.label`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const FormInput = styled.input`
    padding: 6px 8px;
    width: 70%;
    font-size: 14px;
    margin-bottom: 8px;

    &:focus {
        outline: none
    }
`;

export const FormSpanError = styled.span`
    color: red;
    font-weight: bold;
    font-size: 12px;
`;

export const FormSelector = styled(Selector)`
    padding: 2px 8px;
    width: 70%;
    margin-bottom: 8px;
`;