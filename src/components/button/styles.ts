import styled from "styled-components";

export const Button = styled.button<{ backgroundColor: string }>`
  width: 277px;
  height: 72px;
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  border: 1px solid #c3ad60;
  :hover {
    color: #c3ad60;
    background-color: #000;
    border: none;
  }

  @media (max-width: 600px) {
    /* width: 100%; */
    height: 40px;
    margin: 4px;
  }
`;
