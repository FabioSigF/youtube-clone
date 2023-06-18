import { styled } from "styled-components";
import { color } from "../../GlobalStyle";

export const Wrapper = styled.button `
  background-color: ${color.buttonLight};
  color: ${color.text};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 18px;

  display: flex;
  align-items: center;
  gap: .5rem;
  svg
  {
    width: 20px;
    height: 20px;
  }
  &:hover
  {
    background-color: ${color.buttonLightHover};
  }
`

export const Deslike = styled.div `
  padding-left: .5rem;
  border-left: 1px solid ${color.grayBorder};
`