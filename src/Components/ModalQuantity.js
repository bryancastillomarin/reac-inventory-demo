import React, { useState } from "react";
import styled from "styled-components";
import { FormLabel, FormInput, FormSpanError } from "./FormComponents";
import { UpdateButton, InactivateButton } from "./Buttons";
import { connect } from "react-redux";
import { getItem } from "../Item/selectors";
import { hideQuantityItemModalAction, updateQuantityItemRequest } from "../Item/thunks";

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

const ModalQuantity = ({ item, updateQuantityItem, hideModal }) => {
    
    const [quantity, setQuantity] = useState(item.quantity);
    
    const updateQuantityItemEvent = (quantity) => {
        updateQuantityItem({
            category: {
                id: item.category.id
            },
            id: item.id,
            quantity: quantity
        });
    };

    return (
        <Modal>
            <ModalContainer>
                <ModalTitle>
                    <h4>Set Quantity</h4>
                    <ModalCloseButton onClick={e => { e.preventDefault(); hideModal(); }}>&times;</ModalCloseButton>
                </ModalTitle>
                <ModalContent>
                    <FormLabel>Quantity</FormLabel>
                    <FormInput type="number" value={quantity} onChange={e => {setQuantity(e.target.value);}}></FormInput>
                    <FormSpanError></FormSpanError>
                </ModalContent>
                <ModalFooter>
                    <UpdateButton onClick={e => { e.preventDefault(); updateQuantityItemEvent(quantity);}}>Update</UpdateButton>
                    <InactivateButton onClick={e => { e.preventDefault(); hideModal(); }}>Close</InactivateButton>
                </ModalFooter>
            </ModalContainer>
        </Modal>
    );
};

const mapStateToProps = state => ({
    item: getItem(state)
});

const mapDispatchToProps = dispatch => ({
    updateQuantityItem: item => dispatch(updateQuantityItemRequest(item)),
    hideModal: () => dispatch(hideQuantityItemModalAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalQuantity);