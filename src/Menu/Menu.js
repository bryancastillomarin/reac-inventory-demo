import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { changeMainTitle } from "./thunks";
import { connect } from "react-redux";

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
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;



const Menu = ({ changeTitle }) => {
    const [title, setTitle] = useState("");
    useEffect(() => {
        changeTitle(title)
    }, [title]);
    return (
        <MenuContainer>
            <MenuTitle>Menu</MenuTitle>
            <MenuGroupContainer>
                <MenuGroup>
                    <MenuGroupTitle>Categories</MenuGroupTitle>
                    <MenuGroupContent>
                        <MenuGroupItem>
                            <MenuGroupItemLink 
                                role="link"
                                aria-disabled="true"
                                onClick={e => {
                                    setTitle("Categories List");
                                }}
                            >
                                Categories List
                            </MenuGroupItemLink>
                        </MenuGroupItem>
                        <MenuGroupItem>
                            <MenuGroupItemLink
                                role="link"
                                aria-disabled="true"
                                onClick={e => {
                                    setTitle("Category");
                                }}
                            >
                                New Category
                            </MenuGroupItemLink>
                        </MenuGroupItem>
                    </MenuGroupContent>
                </MenuGroup>
                <MenuGroup>
                    <MenuGroupTitle>Items</MenuGroupTitle>
                    <MenuGroupContent>
                        <MenuGroupItem>
                            <MenuGroupItemLink
                                role="link"
                                aria-disabled="true"
                                onClick={e => {
                                    setTitle("Items List");
                                }}
                            >
                                Items List
                            </MenuGroupItemLink>
                        </MenuGroupItem>
                        <MenuGroupItem>
                            <MenuGroupItemLink
                                role="link"
                                aria-disabled="true"
                                onClick={e => {
                                    setTitle("Item");
                                }}
                            >
                                New Item
                            </MenuGroupItemLink>
                        </MenuGroupItem>
                    </MenuGroupContent>
                </MenuGroup>
            </MenuGroupContainer>
        </MenuContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    changeTitle: title => dispatch(changeMainTitle(title))
});

export default connect(null, mapDispatchToProps)(Menu);