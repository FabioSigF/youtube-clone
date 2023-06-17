import { styled } from "styled-components";
import { padding } from "../../GlobalStyle";

export const Container = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 56px;
`

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: ${padding.container};
  padding-right: ${padding.container};
`

export const MenuWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Hamburger = styled.a `
  cursor: pointer;
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
`

export const Widgets = styled.ul `
  display: flex;
  align-items: center;
  gap: 1rem;

  li a svg
  {
    width: 24px;
    height: 24px;
  }

`