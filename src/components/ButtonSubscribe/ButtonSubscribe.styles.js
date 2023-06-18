import { styled } from "styled-components";
import { color } from "../../GlobalStyle";

export const Wrapper = styled.button `
  background-color: ${color.buttonDark};
  color: ${color.textWhite};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 18px;
  &:hover
  {
    background-color: ${color.buttonDarkHover};
  }
`