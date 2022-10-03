import React from "react";
import styled from "styled-components";
import FiltersContainer from "../Components/FiltersContainer";
import SelectStatusFilter from "../Components/SelectStatusFilter";
import SelectCategoryFilter from "../Components/SelectCategoryFilter";
import ItemsTable from "./ItemsTable";
import { RefreshButton } from "../Components/Buttons";

const MainContent = styled.div`
    margin-top: 16px;
`;

const ItemsContainer = () => (
    <MainContent>
        <FiltersContainer>
            <SelectStatusFilter />
            <SelectCategoryFilter />
            <RefreshButton>Refresh</RefreshButton>
        </FiltersContainer>
        <ItemsTable />
    </MainContent>
);

export default ItemsContainer;