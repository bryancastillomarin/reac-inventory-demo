import React, { useEffect } from "react";
import styled from "styled-components";
import FiltersContainer from "../Components/FiltersContainer";
import SelectStatusFilter from "../Components/SelectStatusFilter";
import SelectCategoryFilter from "../Components/SelectCategoryFilter";
import ItemsTable from "./ItemsTable";
import { RefreshButton } from "../Components/Buttons";

import { getCategoriesForItems } from "./selectors";
import { getItemsFilteredRequest } from "./thunks"
import { connect } from "react-redux";



const MainContent = styled.div`
    margin-top: 16px;
`;

const ItemsContainer = ({ activeCategories, getItemsFiltered }) => {
    useEffect(() => {
        getItemsFiltered();
    }, []);
    return (
        <MainContent>
            <FiltersContainer>
                <SelectStatusFilter id={"itemsFilterStatus"}/>
                <SelectCategoryFilter categories={activeCategories}/>
                <RefreshButton
                    onClick={e => {
                            e.preventDefault();
                            const status = document.getElementById("itemsFilterStatus").value;
                            const idCategory = document.getElementById("itemsFilterCategory").value;
                            getItemsFiltered({ category: { id: idCategory }, status: status});
                        }
                    }
                >
                    Refresh
                </RefreshButton>
            </FiltersContainer>
            <ItemsTable />
        </MainContent>
    );
};

const mapStateToProps = state => ({
    activeCategories: getCategoriesForItems(state)
});

const mapDispatchToProps = dispatch => ({
    getItemsFiltered: item => dispatch(getItemsFilteredRequest(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);