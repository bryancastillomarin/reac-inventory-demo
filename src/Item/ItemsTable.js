import React from "react";
import Table from "../Components/Table";
import Item from "./Item";

const ItemsTable = () => (
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
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </tbody>
    </Table>
);

export default ItemsTable;