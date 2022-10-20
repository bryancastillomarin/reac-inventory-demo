import Menu from "./Menu/Menu"
import MainContainer from "./Components/MainContainer";
import styled from "styled-components";
import Loader from "./Components/Loader";
import ModalQuantity from "./Components/ModalQuantity";
import { connect } from "react-redux";
import { getCategoryIsError, getCategoryIsLoading } from "./Category/selectors";
import { getItemIsError, getItemIsLoading, showModal } from "./Item/selectors";
import { getTitle } from "./Menu/selectors";
import ErrorMessage from "./Components/ErrorMessage";

const AppContainer = styled.div`
    margin: 32px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: nowrap;
`;

const App = ({ isLoading, title, isModalActive, isError }) => (
    <>
        { isError ? <ErrorMessage /> : null}
        { isLoading ? <Loader /> : null}
        { isModalActive ? <ModalQuantity /> : null}
        <AppContainer>
            <Menu title={title}/>    
            <MainContainer title={title}/>
        </AppContainer>
    </>
);

const mapStateToProps = state => ({
    isLoading: getCategoryIsLoading(state) || getItemIsLoading(state),
    title: getTitle(state),
    isModalActive: showModal(state),
    isError: getItemIsError(state) || getCategoryIsError(state)
});

export default connect(mapStateToProps)(App);