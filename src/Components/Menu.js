import React from "react";
import styled from "styled-components";

const MenuContainer = styled.aside`
    flex-basis: 20%;
    margin: 0 12px;
`;

const MenuTitle = styled.h1``;

const MenuGroupContainer = styled.div`
    padding: 12px 4px;
`;

const MenuGroup = styled.div`
    margin: 16px 0;
`;

const MenuGroupTitle = styled.h3`
    font-size: 16px;
    margin-bottom: 8px;
`;

const MenuGroupContent = styled.ul``;

const MenuGroupItem = styled.li`
    list-style: none;
    margin-left: 4px;
    margin-bottom: 4px;
`;

const MenuGroupItemLink = styled.a`
    text-decoration: none;
    color: #1B1B1B;

    &:hover {
        text-decoration: underline;
    }
`;



const Menu = () => (
    <MenuContainer>
        <MenuTitle>Menu</MenuTitle>
        <MenuGroupContainer>
            <MenuGroup>
                <MenuGroupTitle>Categories</MenuGroupTitle>
                <MenuGroupContent>
                    <MenuGroupItem>
                        <MenuGroupItemLink href="categories-list">Categories List</MenuGroupItemLink>
                    </MenuGroupItem>
                    <MenuGroupItem>
                        <MenuGroupItemLink href="new-category">New Category</MenuGroupItemLink>
                    </MenuGroupItem>
                </MenuGroupContent>
            </MenuGroup>
            <MenuGroup>
                <MenuGroupTitle>Items</MenuGroupTitle>
                <MenuGroupContent>
                    <MenuGroupItem>
                        <MenuGroupItemLink href="#items-list">Items List</MenuGroupItemLink>
                    </MenuGroupItem>
                    <MenuGroupItem>
                        <MenuGroupItemLink href="#new-item">New Item</MenuGroupItemLink>
                    </MenuGroupItem>
                </MenuGroupContent>
            </MenuGroup>
        </MenuGroupContainer>
    </MenuContainer>
);

export default Menu;