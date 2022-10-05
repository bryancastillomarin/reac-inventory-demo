import React, { useState } from "react";
import { Form, FormGroup, FormActions, FormLabel, FormInput, FormSpanError } from "../Components/FormComponents";
import { CreateButton, UpdateButton, ActivateButton, InactivateButton } from "../Components/Buttons";
import { connect } from "react-redux";
import { getCategory } from "./selectors";
import { createCategoryRequest } from "./thunks";

const NewCategoryForm = ({ category, createCategory }) => {
    
    const [categoryName, setCategoryName] = useState(category.name);
    const [categoryDescription, setCategoryDescription] = useState(category.description);

    const createCategoryEvent = () => {
        createCategory({
            name: categoryName,
            description: categoryDescription
        });
    };

    return (
        <Form id={ category.id }>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormInput
                    type="text"
                    value={ categoryName }
                    onChange={e => {
                        setCategoryName(e.target.value);
                    }}
                />
                <FormSpanError id="categoryNameError"></FormSpanError>
            </FormGroup>
            <FormGroup>
                <FormLabel>Description</FormLabel>
                <FormInput
                    type="text"
                    value={ categoryDescription }
                    onChange={e => {
                        setCategoryDescription(e.target.value);
                    }}
                />
                <FormSpanError id="categoryDescriptionError"></FormSpanError>
            </FormGroup>
            <FormActions>
                {category.id === 0 ? <CreateButton onClick={e => {e.preventDefault(); createCategoryEvent();}}>Create</CreateButton> : null}
                {category.id > 0 ? <UpdateButton>Update</UpdateButton> : null}
                {category.id > 0 && !category.status ? <ActivateButton>Activate</ActivateButton>: null}
                {category.id > 0 && category.status ? <InactivateButton>Inactivate</InactivateButton> : null}
            </FormActions>
        </Form>
    );
};

const mapStateToProps = state => ({
    category: getCategory(state)
});

const mapDispatchToProps = dispatch => ({
    createCategory: category => dispatch(createCategoryRequest(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCategoryForm);