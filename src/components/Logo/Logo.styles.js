import { styled } from "styled-components";
import { color } from "../../GlobalStyle";

export const Wrapper = styled.a `
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  gap: .1rem;
  color: ${color.primary};
  h1
  {
    color: ${color.text};
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
`