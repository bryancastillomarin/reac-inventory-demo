import Menu from "./Components/Menu"
import MainContainer from "./Components/MainContainer";
import styled from "styled-components";
import Loader from "./Components/Loader";
import ModalQuantity from "./Components/ModalQuantity";

const AppContainer = styled.div`
    margin: 32px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: nowrap;
`;

const App = () => (
    <AppContainer>
        <Menu />
        {/* <Loader /> */}
        {/* <ModalQuantity /> */}
        <MainContainer />
    </AppContainer>
);

export default App;
