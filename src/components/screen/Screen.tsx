import React from 'react'
import arrow from "../../assests/arrow.jpg";
import ellipse from "../../assests/ellipse.jpg";
import ellipse1 from "../../assests/ellipse1.jpg";
import ellipse2 from "../../assests/ellipse2.jpg";
import ellipse3 from "../../assests/ellipse3.jpg";
import ellipse4 from "../../assests/ellipse4.jpg";
import man from "../../assests/man.jpg";
import { Bricks, BricksProps } from "../bricks/Bricks";
import { Button, ButtonProps } from "../button/Button";

import * as S from "./styles";

const bricksAndData: BricksProps[] = [
  {
    title: ellipse1,
    value: "EVERYTHING ELLA",
    date: "dd/mm/yy",
    img: man,
    name: "John DEO",
    backgroundColor: "#C3AD60"
  },
  {
    title: ellipse2,
    value: "LUCID PICTURE",
    date: "dd/mm/yy",
    img: man,
    name: "John DEO",
    backgroundColor: "#C3AD60"
  },
  {
    title: ellipse,
    value: "TJG AGRO SERVICES",
    date: "dd/mm/yy",
    img: man,
    name: "John DEO",
    backgroundColor: "#C3AD60"
  },
  {
    title: ellipse3,
    value: "ONIDIRI",
    date: "dd/mm/yy",
    img: man,
    name: "John DEO",
    backgroundColor: "#C3AD60"
  },
  {
    title: ellipse4,
    value: "DARQUE ARTS",
    date: "dd/mm/yy",
    img: man,
    name: "John DEO",
    backgroundColor: "#C3AD60"
  }
];

const ButtonData: ButtonProps[] = [
  {
    title: "Request Submissions",
    backgroundColor: "#c3ad60"
  },
  {
    title: "Processing",
    backgroundColor: "#c3ad60"
  },
  {
    title: "Processed Requests",
    backgroundColor: "#c3ad60"
  },
  {
    title: "Finalize Accepted",
    backgroundColor: "#c3ad60"
  }
];

export function Screen() {
  return (
    <S.Screen>
      <S.ButtonContainer>
        {ButtonData.map((item) =>
        <Button key={item.title} title={item.title} backgroundColor={item.backgroundColor}
        /> 
        )}
      </S.ButtonContainer>
      <S.BricksContainer>
        {bricksAndData.map((item) =>
        <Bricks key={item.title} title={item.title} value={item.value} date={item.date}
        img={item.img} name={item.name} backgroundColor={item.backgroundColor}
        />
        )}
      </S.BricksContainer>
    </S.Screen>
  )
}
