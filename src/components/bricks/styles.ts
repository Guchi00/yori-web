import styled from "styled-components";

export const Brick = styled.div<{ backgroundColor: string }>`
  width: 770px;
  height: 92px;
  background: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid #c3ad60;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 8px;
  :hover {
    color: #fff;
    background: linear-gradient(90deg, #c3ad60 16.36%, rgba(0, 0, 0, 0) 88.44%);
    border: 1px solid #c3ad60;
    .greenColor {
      color: #6AD13A;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 4px 0px;
    padding: 0px 10px;

    p {
      font-size: .7rem;
    }
  }
`;

export const ImgDiv = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;

export const LetterDiv = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
`;

export const Letter = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
`;

export const DateDiv = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
`;

export const Date = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
`;

export const PersonImgDiv = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  justify-content: flex-end;
`;

export const PersonImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;

export const NameDiv = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 23px;
`;
