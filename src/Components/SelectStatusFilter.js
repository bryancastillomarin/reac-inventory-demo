import React from "react";
import Selector from "./Selector";

const SelectStatusFilter = () => (
    <Selector>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
    </Selector>
);

export default SelectStatusFilter;