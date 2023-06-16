import React from 'react'
import { Wrapper } from './UserButtonAvatar.styles'

export default function UserButtonAvatar({data}) {
  return (
    <Wrapper>
      <a href="#!">
        <img src={data.avatar} alt={data.name} />
      </a>
    </Wrapper>
  )
}
