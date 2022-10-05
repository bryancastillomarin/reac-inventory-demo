import React from "react";
import { DetailsButton, ActivateButton, InactivateButton } from "../Components/Buttons";
import { TITLE_CATEGORY } from "../Menu/Menu";


const Category = ({ category, onGetDetailsPressed, onUpdateStatusCategoryPressed }) => {
    
    const getDetailsEvent = () => {
        onGetDetailsPressed(category.id);
    }

    const updateStatusEvent = (status) => {
        onUpdateStatusCategoryPressed({
            id: category.id,
            status: status
        });
    }

    return (
        <tr data-id={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td>{category.status ? "Active" : "Inactive"}</td>
            <td>
                <DetailsButton onClick={e => {e.preventDefault(); getDetailsEvent(); }}>Details</DetailsButton>
                {
                    category.status
                    ? <InactivateButton onClick={e => {e.preventDefault(); updateStatusEvent(false); }}>Inactivate</InactivateButton>
                    : <ActivateButton onClick={e => {e.preventDefault(); updateStatusEvent(true); }}>Activate</ActivateButton>
                }
            </td>
        </tr>
    );
};

export default Category;