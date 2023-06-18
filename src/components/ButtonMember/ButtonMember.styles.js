import { styled } from "styled-components";
import { color } from "../../GlobalStyle";

export const Wrapper = styled.button `
  background-color: white;
  color: ${color.text};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 18px;
  border: 1px solid ${color.grayBorder};
  &:hover
  {
    background-color: ${color.buttonLightHover};
  }
`