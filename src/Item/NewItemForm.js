import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormActions, FormLabel, FormInput, FormSpanError, FormSelector } from "../Components/FormComponents";
import { CreateButton, UpdateButton, ActivateButton, InactivateButton, QuantityButton, DeleteButton } from "../Components/Buttons";
import { getCategoriesForItems, getItem } from "./selectors";
import { createItemRequest, deleteItemRequest, showQuantityItemModalAction, updateItemRequest, updateStatusItemRequest } from "./thunks";
import { connect } from "react-redux";
import { TITLE_ITEMS_LIST } from "../Menu/Menu";
import { changeMainTitle } from "../Menu/thunks";

const NewItemForm = ({ item, categories, createItem, updateItem, updateStatusItem, deleteItem, showQuantityItemModal, changeView }) => {

    const [itemName, setItemName] = useState(item.name);
    const [itemDescription, setItemDescription] = useState(item.description);
    const [itemQuantity, setItemQuantity] = useState(item.quantity);
    const [idCategory, setIdCategory] = useState(item.category.id);

    useEffect(() => {
        setItemQuantity(item.quantity);
    }, [item]);

    const createItemEvent = () => {
        createItem({
            category: {
                id: idCategory
            },
            name: itemName,
            description: itemDescription,
            quantity: itemQuantity
        });
    };

    const updateItemEvent = () => {
        updateItem({
            category: {
                id: idCategory
            },
            id: item.id,
            name: itemName,
            description: itemDescription,
        });
    };

    const updateStatusItemEvent = (status) => {
        updateStatusItem({
            category: {
                id: idCategory
            },
            id: item.id,
            status: status
        });
    };

    const deleteItemEvent = async () => {
        await deleteItem({
            category: {
                id: idCategory
            },
            id: item.id,
        });
        changeView(TITLE_ITEMS_LIST);
    };

    return (
        <Form id={item.id}>
            <FormGroup>
                <FormLabel>Category</FormLabel>
                <FormSelector disabled={item.id > 0 ? "disabled" : null} title="Category Selector" value={idCategory} onChange={e => {setIdCategory(e.target.value);}}>
                    <option value="0">Select</option>
                    {
                        categories.map(category => (
                            <option 
                                value={category.id}
                                key={category.id}
                                
                            >
                                {`${category.id} - ${category.name}`}
                            </option>
                        ))
                    }
                </FormSelector>
                <FormSpanError></FormSpanError>
            </FormGroup>
            <FormGroup>
                <FormLabel>Quantity</FormLabel>
                <FormInput
                    type="number"
                    value={itemQuantity}
                    onChange={e => {setItemQuantity(e.target.value)}}
                    disabled={item.id > 0 ? "disabled" : null}
                />
                <FormSpanError></FormSpanError>
            </FormGroup>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormInput type="text" value={itemName} onChange={e => {setItemName(e.target.value)}}/>
                <FormSpanError></FormSpanError>
            </FormGroup>
            <FormGroup>
                <FormLabel>Description</FormLabel>
                <FormInput type="text" value={itemDescription} onChange={e => {setItemDescription(e.target.value)}}/>
                <FormSpanError></FormSpanError>
            </FormGroup>
            <FormActions>
                {item.id === 0 ? <CreateButton onClick={e => {e.preventDefault(); createItemEvent();}}>Create</CreateButton> : null}
                {item.id > 0 && item.status ? <UpdateButton onClick={e => {e.preventDefault(); updateItemEvent();}}>Update</UpdateButton> : null}
                {item.id > 0 && !item.status ? <ActivateButton onClick={e => {e.preventDefault(); updateStatusItemEvent(true);}}>Activate</ActivateButton> : null }
                {item.id > 0 && item.status ? <InactivateButton onClick={e => {e.preventDefault(); updateStatusItemEvent(false);}}>Inactivate</InactivateButton> : null}
                {item.id > 0 && item.status ? <QuantityButton onClick={e => {e.preventDefault(); showQuantityItemModal(item);}}>Set Quantity</QuantityButton> : null}
                {item.id > 0 && item.status ? <DeleteButton onClick={e => {e.preventDefault(); deleteItemEvent();}}>Delete</DeleteButton> : null}
            </FormActions>
        </Form>
    );
};

const mapStateToProps = state => ({
    item: getItem(state),
    categories: getCategoriesForItems(state)
});

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(createItemRequest(item)),
    updateItem: item => dispatch(updateItemRequest(item)),
    updateStatusItem: item => dispatch(updateStatusItemRequest(item)),
    deleteItem: item => dispatch(deleteItemRequest(item)),
    showQuantityItemModal: item => dispatch(showQuantityItemModalAction(item)),
    changeView: title => dispatch(changeMainTitle(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemForm);