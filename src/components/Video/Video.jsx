import React from 'react'
import { Description, Info, Metrics, Thumb, Views, Wrapper } from './Video.styles'

import { showViews } from '../../auxiliar/showViews';
export default function Video({data}) {
  // function showTime(date)
  // {
  // }
  return (
    <Wrapper href={data.videoLink}>
      <Thumb src={data.thumbnail} alt={data.title} />
      <Description>
        <img src={data.avatar} alt={data.author} />
        <Info>
          <h2>{data.title}</h2>
          <h3><a href={data.chanelLink}>{data.author}</a></h3>
          <Metrics>
            <Views>{showViews(data.views)}</Views>
            <div>há 5 dias</div>
          </Metrics>
        </Info>
      </Description>
    </Wrapper>
  )
}
