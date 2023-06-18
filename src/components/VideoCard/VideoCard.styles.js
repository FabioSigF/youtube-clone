import { styled } from "styled-components";
import { color, fSize, pseudoCfg } from "../../GlobalStyle";

export const Wrapper = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: auto;
`

export const Thumb = styled.img`
  border-radius: 10px;
  max-width: 100%;
`

export const Description = styled.div`
  display: flex;
  gap: .75rem;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;

  h2{
    font-weight: 600;
    max-width: 100%;
    word-wrap: break-word;
  }

  h3 a
  {
    font-size: ${fSize.small};
    color: ${color.textLight};
    &:hover
    {
      color: ${color.text};
    }
  }
`

export const Metrics = styled.div`
  color: ${color.textLight};
  font-size: ${fSize.small};
  display: flex;
  gap: .7rem;
`

export const Views = styled.div `
  display: flex;
  align-items: center;
  position: relative;
  &::after
  {
    ${pseudoCfg}
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${color.textLight};
    right: -.45rem;
  }
`