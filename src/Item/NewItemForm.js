import React from "react";
import { Form, FormGroup, FormActions, FormLabel, FormInput, FormSpanError, FormSelector } from "../Components/FormComponents";
import { CreateButton, UpdateButton, ActivateButton, InactivateButton, QuantityButton, DeleteButton } from "../Components/Buttons";

const NewItemForm = () => (
    <Form>
        <FormGroup>
            <FormLabel>Category</FormLabel>
            <FormSelector>
                <option value="0">Select</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
                <option value="4">Category 4</option>
                <option value="5">Category 5</option>
                <option value="6">Category 6</option>
                <option value="7">Category 7</option>
                <option value="8">Category 8</option>
            </FormSelector>
            <FormSpanError>Category Error</FormSpanError>
        </FormGroup>
        <FormGroup>
            <FormLabel>Quantity</FormLabel>
            <FormInput type="number"/>
            <FormSpanError>Quantity Error</FormSpanError>
        </FormGroup>
        <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput type="text"/>
            <FormSpanError>Name Error</FormSpanError>
        </FormGroup>
        <FormGroup>
            <FormLabel>Description</FormLabel>
            <FormInput type="text"/>
            <FormSpanError>Description Error</FormSpanError>
        </FormGroup>
        <FormActions>
            <CreateButton>Create</CreateButton>
            <UpdateButton>Update</UpdateButton>
            <ActivateButton>Activate</ActivateButton>
            <InactivateButton>Inactivate</InactivateButton>
            <QuantityButton>Set Quantity</QuantityButton>
            <DeleteButton>Delete</DeleteButton>
        </FormActions>
    </Form>
);

export default NewItemForm;