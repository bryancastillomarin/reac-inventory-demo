import React from "react";
import styled from "styled-components";
import FiltersContainer from "../Components/FiltersContainer";
import SelectStatusFilter from "../Components/SelectStatusFilter";
import CategoriesTable from "./CategoriesTable";
import { RefreshButton } from "../Components/Buttons";

const MainContent = styled.div`
    margin-top: 16px;
`;

const CategoriesContainer = () => (
    <MainContent>
        <FiltersContainer>
            <SelectStatusFilter />
            <RefreshButton>Refresh</RefreshButton>
        </FiltersContainer>
        <CategoriesTable />
    </MainContent>
);

export default CategoriesContainer;