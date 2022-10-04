import React from "react";
import Table from "../Components/Table";
import Category from "./Category";

const CategoriesTable = ({categories}) => (
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
            {
                categories.map(category => (
                    <Category category={category} key={category.id}/>
                ))
            }
        </tbody>
    </Table>
);

export default CategoriesTable;