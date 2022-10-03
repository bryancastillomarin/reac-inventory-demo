import React from "react";
import TableDataNoWrap from "../Components/TableDataNoWrap";
import { DetailsButton, ActivateButton, InactivateButton, DeleteButton, QuantityButton } from "../Components/Buttons";

const Item = () => (
    <tr>
        <td>2</td>
        <td>1</td>
        <td>Item 2</td>
        <td>This is a description for item with id 2</td>
        <td>100</td>
        <td>Inactive</td>
        <TableDataNoWrap>
            <DetailsButton>Details</DetailsButton>
            <ActivateButton>Activate</ActivateButton>
            <InactivateButton>Inactivate</InactivateButton>
            <QuantityButton>Set Quantity</QuantityButton>
            <DeleteButton>Delete</DeleteButton>
        </TableDataNoWrap>
    </tr>
);

export default Item;