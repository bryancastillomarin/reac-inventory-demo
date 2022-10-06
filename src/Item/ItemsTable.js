import React from "react";
import Table from "../Components/Table";
import Item from "./Item";
import { connect } from "react-redux";

import { getItems } from "./selectors";

const ItemsTable = ({ items }) => (
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
                    />
                ))
            }
        </tbody>
    </Table>
);

const mapStateToProps = state => ({
    items: getItems(state)
});

export default connect(mapStateToProps)(ItemsTable);