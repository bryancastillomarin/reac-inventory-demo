import React from "react";
import TableDataNoWrap from "../Components/TableDataNoWrap";
import { DetailsButton, ActivateButton, InactivateButton, DeleteButton, QuantityButton } from "../Components/Buttons";

const Item = ({ item }) => {
    
    return (
        <tr data-id={item.id} data-id-category={item.category.id}>
            <td>{item.id}</td>
            <td>{item.category.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.status ? "Active" : "Inactive"}</td>
            <TableDataNoWrap>
                <DetailsButton>Details</DetailsButton>
                {!item.status ? <ActivateButton>Activate</ActivateButton> : null}
                {item.status ? <InactivateButton>Inactivate</InactivateButton> : null}
                {item.status ? <QuantityButton>Set Quantity</QuantityButton> : null}
                {item.status ? <DeleteButton>Delete</DeleteButton> : null}
            </TableDataNoWrap>
        </tr>
    );
}

export default Item;