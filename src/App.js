import Menu from "./Components/Menu"
import MainContainer from "./Components/MainContainer";
import styled from "styled-components";

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
        <MainContainer />
    </AppContainer>
);

export default App;
