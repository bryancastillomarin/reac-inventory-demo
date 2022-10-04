import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import { connect } from "react-redux";
import { getCategoriesFilteredRequest } from "../Category/thunks";

const SelectStatusFilter = ({ getCategoriesFiltered, id }) => {
    const [selectedOption, setSelectedOption] = useState("true");
    useEffect(() => {
        getCategoriesFiltered(selectedOption);
    }, [selectedOption]);

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
    getCategoriesFiltered: state => dispatch(getCategoriesFilteredRequest(state))
});

export default connect(null, mapDispatchToProps)(SelectStatusFilter);