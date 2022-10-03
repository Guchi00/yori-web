import styled from "styled-components";

export const Screen = styled.div`
  width: 1440px;
  background: #000;
  height: calc(100vh - 128px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
    height: max-content;
    flex-direction: column;
    padding: 20px 0px;
  }
`;

export const ButtonContainer = styled.div`
  height: 420px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (max-width: 600px) {
    /* width: 100%; */
    height: max-content;
  }
`;

export const BricksContainer = styled.div`
  height: 500px;
  width: 800px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
    padding: 5px;
  }
`;
