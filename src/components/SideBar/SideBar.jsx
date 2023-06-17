import React from 'react'
import { Wrapper } from './SideBar.styles'
import { iconList } from '../../GlobalStyle'
import { NavLink } from 'react-router-dom'


export default function SideBar() {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink to="/">
            {iconList.home} <p>Início</p>
          </NavLink>
        </li>
        <li>
          <NavLink  to="/shorts">
            {iconList.shorts} <p>Shorts</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/subscribes">
            {iconList.subscribes} <p>Inscrições</p>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/library">
            {iconList.library}
            <p>Biblioteca</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/history">
            {iconList.history}
            <p>Histórico</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/yourVideos">
            {iconList.yourVideos}
            <p>Seus vídeos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/seeLater">
            {iconList.seeLater}
            <p>Assistir mais tarde</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/like">
            {iconList.like}
            <p title="Vídeos marcados como 'Gostei'">Vídeos marcados c ...</p>
          </NavLink>
        </li>
      </ul>
      <ul>
        <p>Explorar</p>
        <li>
          <NavLink to="/trending">
            {iconList.trending}
            <p>Em alta</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/shopping">
            {iconList.shopping}
            <p>Shopping</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/music">
            {iconList.music}
            <p>Música</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/film">
            {iconList.film}
            <p>Filmes</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/live">
            {iconList.live}
            <p>Ao vivo</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/game">
            {iconList.game}
            <p>Jogos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/news">
            {iconList.news}
            <p>Notícias</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/esports">
            {iconList.esports}
            <p>Esportes</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/learn">
            {iconList.learn}
            <p>Aprender</p>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/config">
            {iconList.config}
            <p>Configurações</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/flag">
            {iconList.flag}
            <p title='Histório de denúncias'>Histórico de den ...</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/help">
            {iconList.help}
            <p>Ajuda</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/feedback">
            {iconList.feedback}
            <p>Enviar feedback</p>
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  )
}
