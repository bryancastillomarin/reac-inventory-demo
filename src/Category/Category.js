import React from "react";
import { DetailsButton, ActivateButton, InactivateButton } from "../Components/Buttons";

const Category = ({ category }) => (
    <tr data-id={category.id}>
        <td>{category.id}</td>
        <td>{category.name}</td>
        <td>{category.description}</td>
        <td>{category.status ? "Active" : "Inactive"}</td>
        <td>
            <DetailsButton>Details</DetailsButton>
            {
                category.status
                ? <InactivateButton>Inactivate</InactivateButton>
                : <ActivateButton>Activate</ActivateButton>
            }
        </td>
    </tr>
);

export default Category;