import React from "react";
import styled from "styled-components";
import CategoriesContainer from "../Category/CategoriesContainer";
import NewCategoryForm from "../Category/NewCategoryForm";
import ItemsContainer from "../Item/ItemsContainer";
import NewItemForm from "../Item/NewItemForm";

import { TITLE_CATEGORIES_LIST,TITLE_CATEGORY, TITLE_ITEMS_LIST, TITLE_ITEM } from "../Menu/Menu";

const Main = styled.main`
    flex-basis: 80%;
    margin: 0 12px;
`;

const MainTitle = styled.h1`
    padding: 8px;
`;

const MainContainer = ({ title }) =>(
    <Main>
        <MainTitle id="mainTitle">{title ? title : TITLE_CATEGORIES_LIST}</MainTitle>
        {title === TITLE_CATEGORIES_LIST || title === "" ? <CategoriesContainer /> : null}
        {title === TITLE_CATEGORY ? <NewCategoryForm /> : null}
        {title === TITLE_ITEMS_LIST ? <ItemsContainer /> : null}
        {title === TITLE_ITEM ? <NewItemForm /> : null}
    </Main>
);

export default MainContainer;