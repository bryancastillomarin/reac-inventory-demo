import React, { useEffect } from "react";
import styled from "styled-components";
import FiltersContainer from "../Components/FiltersContainer";
import SelectStatusFilter from "../Components/SelectStatusFilter";
import CategoriesTable from "./CategoriesTable";
import { RefreshButton } from "../Components/Buttons";

import { getCategories } from "./selectors";
import { getCategoriesFilteredRequest } from "./thunks";
import { connect } from "react-redux";

const MainContent = styled.div`
    margin-top: 16px;
`;

const CategoriesContainer = ({ getCategoriesFiltered, categories}) => {
    useEffect(() => {
        getCategoriesFiltered();
    }, []);
    return (
        <MainContent>
            <FiltersContainer>
                <SelectStatusFilter id={"categoriesFilterStatus"}/>
                <RefreshButton
                    onClick={e => {
                            e.preventDefault();
                            const status = document.getElementById("categoriesFilterStatus").value;
                            getCategoriesFiltered(status);
                        }
                    }
                >
                    Refresh
                </RefreshButton>
            </FiltersContainer>
            <CategoriesTable categories={categories}/>
        </MainContent>
    );
};

const mapStateToProps = state => ({
    categories: getCategories(state)
});

const mapDispatchToProps = dispatch => ({
    getCategoriesFiltered: state => dispatch(getCategoriesFilteredRequest(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);