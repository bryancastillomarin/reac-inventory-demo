import React from "react";
import styled from "styled-components";
import CategoriesContainer from "../Category/CategoriesContainer";
import NewCategoryForm from "../Category/NewCategoryForm";
import ItemsContainer from "../Item/ItemsContainer";
import NewItemForm from "../Item/NewItemForm";

const Main = styled.main`
    flex-basis: 80%;
    margin: 0 12px;
`;

const MainTitle = styled.h1`
    padding: 8px;
`;

const MainContainer = ({ title }) =>(
    <Main>
        <MainTitle id="mainTitle">{ title ? title : "Categories List"}</MainTitle>
        <CategoriesContainer />
        {/* <NewCategoryForm />
        <ItemsContainer />
        <NewItemForm /> */}
    </Main>
);

export default MainContainer;