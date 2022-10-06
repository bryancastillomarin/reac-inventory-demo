import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import { connect } from "react-redux";
import { getCategoriesFilteredRequest } from "../Category/thunks";
import { getItemsFilteredRequest } from "../Item/thunks";

const SelectStatusFilter = ({ getCategoriesFiltered, id, getItemsFiltered }) => {
    const [selectedOption, setSelectedOption] = useState("true");
    useEffect(() => {
        if(id === "categoriesFilterStatus"){
            getCategoriesFiltered(selectedOption);
        }
        if(id === "itemsFilterStatus"){
            const idCategory = document.getElementById("itemsFilterCategory").value;
            const item = { category: { id: idCategory }, status: selectedOption }
            getItemsFiltered(item);
        }
    });

    return (
        <Selector
            id={id}
            value={selectedOption}
            onChange={e => {
                    setSelectedOption(e.target.value);
                }
            }
        >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
        </Selector>
    );
};

const mapDispatchToProps = dispatch => ({
    getCategoriesFiltered: state => dispatch(getCategoriesFilteredRequest(state)),
    getItemsFiltered : item => dispatch(getItemsFilteredRequest(item))
});

export default connect(null, mapDispatchToProps)(SelectStatusFilter);