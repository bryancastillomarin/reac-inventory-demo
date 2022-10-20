import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getCategoryIsError } from "../Category/selectors";
import { getItemIsError } from "../Item/selectors";
import { hideMessageError } from "../Category/thunks";

const ErrorMessageContainer = styled.div`
    margin: 20px auto;
    padding: 15px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(243, 86, 86);
`;

const ErrorMessageSpan = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

const CloseButton = styled.span`
    font-size: 24px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
}
`;

const ErrorMessage = ({ error, hideError}) => (
    <ErrorMessageContainer>
        <ErrorMessageSpan>{error}</ErrorMessageSpan>
        <CloseButton onClick={e => {e.preventDefault(); hideError();}}>&times;</CloseButton>
    </ErrorMessageContainer>
);

const mapStateToProps = state => ({
    error: getCategoryIsError(state) || getItemIsError(state)
});

const mapDispatchToProps = dispatch => ({
    hideError: () => dispatch(hideMessageError())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);