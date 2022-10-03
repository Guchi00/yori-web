import React from 'react'

import * as S from "./styles";

export type ButtonProps = {
  title: string;
  backgroundColor: string;
}


export function Button({ title, backgroundColor }: ButtonProps) {
  return (
    <S.Button backgroundColor={backgroundColor}>{title}</S.Button>
  )
}