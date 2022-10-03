import React from "react";
import { Form, FormGroup, FormActions, FormLabel, FormInput, FormSpanError } from "../Components/FormComponents";
import { CreateButton, UpdateButton, ActivateButton, InactivateButton } from "../Components/Buttons";


const NewCategoryForm = () => (
    <Form>
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
        </FormActions>
    </Form>
);
export default NewCategoryForm;