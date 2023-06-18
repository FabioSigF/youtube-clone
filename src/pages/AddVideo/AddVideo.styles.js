import { styled } from "styled-components";
import { color } from "../../GlobalStyle";

export const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form 
  {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    input 
    {
      border: 1px solid ${color.grayBorder};
      padding: .5rem;
    }
  }
`
