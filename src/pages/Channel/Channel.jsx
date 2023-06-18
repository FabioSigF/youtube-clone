import React from 'react'
import { Banner, Content, Description, Header, HeaderDescription, HeaderID, HeaderMetrics, Navbar, Wrapper } from './Channel.styles'
import { showViews } from '../../auxiliar/showViews'
import { showNumberOfVideos } from '../../auxiliar/showNumberOfVideos'
import ButtonSubscribe from '../../components/ButtonSubscribe/ButtonSubscribe'
import { NavLink } from 'react-router-dom'

import bannerC from '../../images/banner.jpg'
import avatarC from '../../images/avatar.jpg'
export default function Channel() {

  const data = {
    banner: bannerC,
    avatar: avatarC,
    author: "Renecrodilo",
    author_id: "@Renecrodilo",
    views: 2121300,
    number_of_videos: 15,
    channel_description: "Vídeos todos os dias ao meio dia. Cobrimos conteúdo sobre os principais streamers do mundo do LoL."
  }

  return (
    <Wrapper>
      <Banner img={data.banner}/>
      <Content>
        <Header>
          <img src={data.avatar} alt={data.author} />
          <HeaderDescription>
            <h2>{data.author}</h2>
            <HeaderMetrics>
              <HeaderID>{data.author_id}</HeaderID>
              <p>{showViews(data.views)}</p>
              <p>{showNumberOfVideos(data.number_of_videos)}</p>
            </HeaderMetrics>
            <Description>
              {data.channel_description}
            </Description>
          </HeaderDescription>
          <ButtonSubscribe />
        </Header>
        <Navbar>
          <ul>
            <li>
              <NavLink>Início</NavLink>
            </li>
            <li>
              <NavLink>Videos</NavLink>
            </li>
            <li>
              <NavLink>Shorts</NavLink>
            </li>
            <li>
              <NavLink>Ao vivo</NavLink>
            </li>
            <li>
              <NavLink>Playlists</NavLink>
            </li>
            <li>
              <NavLink>Comunidade</NavLink>
            </li>
            <li>
              <NavLink>Canais</NavLink>
            </li>
            <li>
              <NavLink>Sobre</NavLink>
            </li>
          </ul>
        </Navbar>
      </Content>
    </Wrapper>
  )
}
