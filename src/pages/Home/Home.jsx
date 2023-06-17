import React from 'react'

import './Home.styles'
import Video from '../../components/Video/Video'
import { Wrapper } from './Home.styles'

export default function Home() {
  return (
    <Wrapper>
      <ul>
        <Video />
        <Video />
        <Video />
        <Video />
      </ul>
    </Wrapper>
  )
}
