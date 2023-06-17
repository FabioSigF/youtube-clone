import { styled } from "styled-components";

export const Wrapper = styled.div `
  position: relative;
  margin-left: 220px;
  margin-top: 56px;
  width: calc(100vw - 220px);
  padding-right: 1rem;
  ul 
  {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
`