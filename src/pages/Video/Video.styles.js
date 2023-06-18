import { styled } from "styled-components";
import { color, fSize } from "../../GlobalStyle";

export const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 65% 30%;
  gap: 1.5rem;
`

export const Main = styled.main `
  max-width: 100%;

  iframe
  {
    min-height: 70vh;
  }
`

export const SideBar = styled.aside `
  ul
  {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const VideoP = styled.div `

`

export const Description = styled.div `
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding-top: .5rem;
  h2 {
    font-weight: 600;
  }
`

export const Bar = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ChannelInfo = styled.div `
  display: flex;
  align-items: center;
  gap: .5rem;

  div 
  {
    h3
    {
      font-size: ${fSize.small};
      font-weight: 600;
      padding-bottom: .2rem;
    }

    p
    {
      font-size: ${fSize.small_x};
    }
  }
`

export const ChannelAvatar = styled.img `
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const ChannelButtons = styled.div `
  display: flex;
  gap: .5rem;
  margin-left: 1rem;
`

export const VideoButtons = styled.div `
  display: flex;
  gap: .5rem;
`

export const VideoDescription = styled.div `
  background-color: ${color.bgGray};
  font-size: ${fSize.small_x};
  padding: 1rem .5rem;
`

export const VideoDescriptionHeader = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
  
  font-weight: 600;
  padding-bottom: .5rem;
`

export const CommentsContainer = styled.div `
  margin-top: 3rem;
`

export const Comments = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
 
  margin-top: 1rem;
`