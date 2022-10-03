import React from "react";
import { DetailsButton, ActivateButton, InactivateButton } from "../Components/Buttons";

const Category = () => (
    <tr>
        <td>1</td>
        <td>Category 1</td>
        <td>This is a description for category with id 1</td>
        <td>Active</td>
        <td>
            <DetailsButton>Details</DetailsButton>
            <ActivateButton>Activate</ActivateButton>
            <InactivateButton>Inactivate</InactivateButton>
        </td>
    </tr>
);

export default Category;