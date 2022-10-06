import React from "react";
import { getItemsFilteredRequest } from "../Item/thunks";
import Selector from "./Selector";
import { connect } from "react-redux";

const SelectCategoryFilter = ({ categories, getItemsFiltered }) => (
    <Selector id="itemsFilterCategory" onChange={e => {
            const status = document.getElementById("itemsFilterStatus").value;
            const idCategory = e.target.value;
            getItemsFiltered({ category: { id: idCategory }, status: status});
        }}
    >
        <option value={0}>All categories</option>
        {
            categories.map(category => (
                <option value={category.id} key={category.id}>{`${category.id} - ${category.name}`}</option>
            ))
        }
    </Selector>
);

const mapDispatchToProps = dispatch => ({
    getItemsFiltered: item => dispatch(getItemsFilteredRequest(item))
});

export default connect(null, mapDispatchToProps)(SelectCategoryFilter);