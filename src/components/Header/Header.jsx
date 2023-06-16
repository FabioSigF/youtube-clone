import React from 'react'
import { Container, Hamburger, MenuWrapper, Widgets, Wrapper } from './Header.styles'
import Logo from '../Logo/Logo'
import SeachBar from '../SeachBar/SeachBar'
import { iconList } from '../../GlobalStyle'
import UserButtonAvatar from '../UserButtonAvatar/UserButtonAvatar'

import userImage from '../../images/avatar.jpg'

const userData = {
  name: 'Fábio Signorini',
  avatar: userImage,
  id: '@fabio123'
}

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <MenuWrapper>
          <Hamburger>
            {iconList.menu}
          </Hamburger>
          <Logo />
        </MenuWrapper>
        <SeachBar />
        <Widgets>
          <li>
            <a href="#!">
              {iconList.cam}
            </a>
          </li>
          <li>
            <a href="#!">
              {iconList.bell}
            </a>
          </li>
          <li>
            <UserButtonAvatar data={userData} />
          </li>
        </Widgets>
      </Wrapper>
    </Container>
  )
}
