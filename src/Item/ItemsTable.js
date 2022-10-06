import React from "react";
import Table from "../Components/Table";
import Item from "./Item";
import { connect } from "react-redux";
import { getItems } from "./selectors";
import { deleteItemRequest, updateQuantityItemRequest, updateStatusItemRequest } from "./thunks";

const ItemsTable = ({ items, updateStatusItem, updateQuantityItem, deleteItem }) => (
    <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map(item => (
                    <Item 
                        item={item}
                        key={item.id}
                        onUpdateStatusPressed={updateStatusItem}
                        onUpdateQuantityPressed={updateQuantityItem}
                        onDeletePressed={deleteItem}
                    />
                ))
            }
        </tbody>
    </Table>
);

const mapStateToProps = state => ({
    items: getItems(state)
});

const mapDispatchToProps = dispatch => ({
    updateStatusItem: item => dispatch(updateStatusItemRequest(item)),
    updateQuantityItem: item => dispatch(updateQuantityItemRequest(item)),//
    deleteItem: item => dispatch(deleteItemRequest(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);