import { styled } from "styled-components";
import { color } from "../../GlobalStyle";

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;

  h1 {
    text-transform: uppercase;
    padding-bottom: 2rem;
  }

  form
  {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 30%;
    input {
      border: 1px solid ${color.grayBorder};
    }
  }
`