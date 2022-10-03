import React from "react";
import Table from "../Components/Table";
import Category from "./Category";

const CategoriesTable = () => (
    <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <Category />
            <Category />
            <Category />
            <Category />
        </tbody>
    </Table>
);

export default CategoriesTable;