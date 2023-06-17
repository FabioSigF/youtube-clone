import { styled } from "styled-components";
import { color, fSize } from "../../GlobalStyle";

export const Wrapper = styled.aside `
  background-color: white;
  height: 100%;
  max-width: 220px;
  padding-left: .5rem;
  padding-right: .5rem;
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  overflow-y: auto;
  z-index: 999;

  &::-webkit-scrollbar
  {
    width: 5px;
  }

  &:hover::-webkit-scrollbar-thumb
  {
    background-color: #808080;
    border-radius: 10px;
  }

  ul:not(:first-of-type)
  {
    padding-top: 1rem;
    border-top: 1px solid ${color.bgGray};
  } 

  ul
  {
    padding-bottom: 1rem;

    &>p 
    {
      padding-left: .8rem;
      padding-bottom: .5rem;
      font-size: ${fSize.small};
      font-weight: 600;
    }

    li a
    {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: ${fSize.small};
      font-weight: 500;

      padding: .5rem;
      border-radius: 5px;

      &.active,
      &:hover
      {
        background-color: ${color.bgGray};
      }

      &.active:hover
      {
        background-color: ${color.bgGrayHover};
      }
      svg
      {
        width: 24px;
        height: 24px;
      }
    }
  }
`