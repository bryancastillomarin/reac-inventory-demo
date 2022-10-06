import React from "react";
import Selector from "./Selector";

const SelectCategoryFilter = ({ categories }) => (
    <Selector id="itemsFilterCategory">
        <option value={0}>All categories</option>
        {
            categories.map(category => (
                <option value={category.id} key={category.id}>{`${category.id} - ${category.name}`}</option>
            ))
        }
    </Selector>
);

export default SelectCategoryFilter;