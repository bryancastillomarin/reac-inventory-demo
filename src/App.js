import Menu from "./Menu/Menu"
import MainContainer from "./Components/MainContainer";
import styled from "styled-components";
import Loader from "./Components/Loader";
import ModalQuantity from "./Components/ModalQuantity";
import { connect } from "react-redux";
import { getCategoryIsLoading } from "./Category/selectors";
import { getItemIsLoading, showModal } from "./Item/selectors";
import { getTitle } from "./Menu/selectors";

const AppContainer = styled.div`
    margin: 32px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: nowrap;
`;

const App = ({ isLoading, title, isModalActive }) => (
    <AppContainer>
        <Menu title={title}/>
        { isLoading ? <Loader /> : <></>}
        { isModalActive ? <ModalQuantity /> : <></>}
        <MainContainer title={title}/>
    </AppContainer>
);

const mapStateToProps = state => ({
    isLoading: getCategoryIsLoading(state) || getItemIsLoading(state),
    title: getTitle(state),
    isModalActive: showModal(state)
});

export default connect(mapStateToProps)(App);