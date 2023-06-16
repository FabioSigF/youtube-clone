import React from 'react'
import './Logo.styles'
import { Wrapper } from './Logo.styles'
import { iconList } from '../../GlobalStyle'
export default function Logo() {
  return (
    <Wrapper href='/'>
      {iconList.youtube}
      <h1>YouTube</h1>
    </Wrapper>
  )
}
