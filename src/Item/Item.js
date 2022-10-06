import React from "react";
import TableDataNoWrap from "../Components/TableDataNoWrap";
import { DetailsButton, ActivateButton, InactivateButton, DeleteButton, QuantityButton } from "../Components/Buttons";

const Item = ({ item, onUpdateStatusPressed, onUpdateQuantityPressed, onDeletePressed }) => {
    
    const updateStatusEvent = (status) => {
        onUpdateStatusPressed({
            category: {
                id: item.category.id
            },
            id: item.id,
            status: status
        });
    }

    const deleteEvent = () => {
        onDeletePressed({
            category: {
                id: item.category.id
            },
            id: item.id
        });
    }

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
                {!item.status ? <ActivateButton onClick={e => {e.preventDefault(); updateStatusEvent(true);}}>Activate</ActivateButton> : null}
                {item.status ? <InactivateButton onClick={e => {e.preventDefault(); updateStatusEvent(false);}}>Inactivate</InactivateButton> : null}
                {item.status ? <QuantityButton>Set Quantity</QuantityButton> : null}
                {item.status ? <DeleteButton onClick={e => {e.preventDefault(); deleteEvent();}}>Delete</DeleteButton> : null}
            </TableDataNoWrap>
        </tr>
    );
}

export default Item;