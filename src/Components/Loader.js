import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 100;
`;

const LoaderContent = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: translate(-48px, -48px) rotate(0deg);
        }
        100% {
            transform: translate(-48px, -48px) rotate(360deg);
        }
    }
`;

const Loader = () => (
    <LoaderContainer>
        <LoaderContent />
    </LoaderContainer>
);

export default Loader;