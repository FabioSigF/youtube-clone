import React from 'react'
import { Deslike, Wrapper } from './ButtonLike.styles'
import { iconList } from '../../GlobalStyle'
import { showLikes } from '../../auxiliar/showLikes'

export default function ButtonLike({ likes }) {
  return (
    <Wrapper>
      {iconList.like}
      {showLikes(likes)}
      <Deslike>
        {iconList.deslike}
      </Deslike>
    </Wrapper>
  )
}
