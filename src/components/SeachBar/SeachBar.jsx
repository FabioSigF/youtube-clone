import React from 'react'
import './SearchBar.styles'
import { Wrapper, Form } from './SearchBar.styles'
import { iconList } from '../../GlobalStyle'
export default function SeachBar() {
  return (
    <Wrapper>
      <Form>
        <input type="text" name="search" id="searchMain" placeholder='Pesquisar'/>
        <button type='submit'>
          {iconList.search}
        </button>
      </Form>
    </Wrapper>
  )
}
