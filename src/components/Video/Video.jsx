import React from 'react'
import { Description, Info, Metrics, Thumb, Views, Wrapper } from './Video.styles'
import thumbnail from '../../images/thumb.webp';
import avatar from '../../images/avatar.jpg';
export default function Video() {
  const data = {
    thumb: thumbnail,
    avatar: avatar,
    title: "O fer não para de alastrar o drop!! ",
    author: "Donos da mídia",
    views: "12345",
    date: "06/16/2023",
    chanelLink: "/chanel",
    videoLink: "/video"
  }

  function showViews(views) {
    let result;

    if (views === "1" || views === 1) {
      result = `${views} visualização`;
      return result;
    }
    else if (views < 999) {
      result = `${views} visualizações`;
      return result;
    }
    else if (views < 1000000) {
      result = `${Math.floor(views / 1000)} mil visualizações`;
      return result;
    } else {
      result = `${Math.floor(views / 1000000)} mi visualizações`;
      return result;
    }
  }

  // function showTime(date)
  // {
  // }
  return (
    <Wrapper href={data.videoLink}>
      <Thumb src={data.thumb} alt={data.title} />
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
