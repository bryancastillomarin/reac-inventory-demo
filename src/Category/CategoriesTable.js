import React from "react";
import Table from "../Components/Table";
import Category from "./Category";
import { connect } from "react-redux";

import { getCategories } from "./selectors";
import { getCategoryRequest, updateStatusCategoryRequest } from "./thunks";

const CategoriesTable = ({categories, updateStatusCategory, getDetailsCategory, changeView}) => {
        return (
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
                        <Category
                            category={category}
                            key={category.id}
                            onGetDetailsPressed={getDetailsCategory}
                            onUpdateStatusCategoryPressed={updateStatusCategory}
                            showForm={changeView}
                        />
                    ))
                }
            </tbody>
        </Table>
    );
};

const mapStateToProps = state => ({
    categories: getCategories(state)
});

const mapDispatchToProps = dispatch => ({
    updateStatusCategory: category => dispatch(updateStatusCategoryRequest(category)),
    getDetailsCategory: id => dispatch(getCategoryRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesTable);