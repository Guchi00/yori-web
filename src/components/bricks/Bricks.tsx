import React from 'react';
import ellipse1 from "../../assests/ellipse1.jpg";
import man from "../../assests/man.jpg";

import * as S from "./styles";

export type BricksProps = {
  title: string;
  value: string;
  date: string;
  img: string;
  name: string;
  backgroundColor: string;
}

export function Bricks({ title, value, date, img, name, backgroundColor }: BricksProps) {
  const fullName = name.split(" ")
  return (
    <S.Brick backgroundColor={backgroundColor}>
      <S.ImgDiv>
        <S.Img src={title} />
      </S.ImgDiv>

      <S.LetterDiv>
        <S.Letter>{value}</S.Letter> 
      </S.LetterDiv>
        
      <S.DateDiv>
          <S.Date>{date}</S.Date>
      </S.DateDiv>

      <S.PersonImgDiv>
        <S.PersonImg src={img}/>
      </S.PersonImgDiv>  
        
      <S.NameDiv>
        <S.Name className="greenColor">{fullName[0]}<b> {fullName[1]}</b></S.Name>
      </S.NameDiv>
        
    </S.Brick>
  )
}
