import React from "react";
import styled from "styled-components";
import { FormLabel, FormInput, FormSpanError } from "./FormComponents";
import { UpdateButton, InactivateButton } from "./Buttons";

const Modal = styled.div`
    width: 100%;
    min-height: 90vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 50;
`;

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #CCC;
    border-radius: 10px;
    transform: translate(-100%, -100%);
    overflow: hidden;
`;

const ModalTitle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: #0c3ca5;
    padding: 16px;
    border-bottom: 1px solid #CCC;
`;

const ModalContent = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid #CCC;
`;

const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 16px;
    background-color: #41a6ff;
`;

const ModalCloseButton = styled.span`
    font-size: 24px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`;

const ModalQuantity = () => (
    <Modal>
        <ModalContainer>
            <ModalTitle>
                <h4>Set Quantity</h4>
                <ModalCloseButton>&times;</ModalCloseButton>
            </ModalTitle>
            <ModalContent>
                <FormLabel>Quantity</FormLabel>
                <FormInput type="number"></FormInput>
                <FormSpanError>Quantity error</FormSpanError>
            </ModalContent>
            <ModalFooter>
                <UpdateButton>Update</UpdateButton>
                <InactivateButton>Close</InactivateButton>
            </ModalFooter>
        </ModalContainer>
    </Modal>
);

export default ModalQuantity;