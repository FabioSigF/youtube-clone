import React from 'react'
import { Description, Info, Metrics, Thumb, Views, Wrapper } from './VideoCard.styles'

import { showViews } from '../../auxiliar/showViews';
export default function VideoCard() {
  // function showTime(date)
  // {
  // }

  //Fake data
  const data = {
    thumbnail:"https://i.ytimg.com/vi/2hR-uWjBAgw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCvyzIE-UFznKz-4AFgS7f46NS7Ug",
    title:"Aprendendo Firebase",
    avatar:"https://yt3.ggpht.com/ytc/AGIKgqMl9TL4OpwS8Zc5jHrNnfO01f_Wbovye9mQzfp36Q=s48-c-k-c0x00ffffff-no-rj",
    author:"Fabio",
    views:21322,
  }
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
