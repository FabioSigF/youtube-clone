import { styled } from "styled-components";
import { color } from "../../GlobalStyle";

export const Wrapper = styled.div `
  max-width: 544px;
  width: 100%;
  height: 38px;
`

export const Form = styled.form `
  display: flex;
  align-items: center;

  input 
  {
    font-size: .9rem;
    width: 100%;
    height: 38px;
    border-radius: 40px 0 0 40px;
    border: 1px solid ${color.grayBorder};
    box-shadow: inset 0 1px 2px #eee;
    
    padding: 1rem 1.5rem;

    &:focus 
    {
      border-color: blue;
      box-shadow: inset 0 3px 4px #eee;
    }
  }

  button
  {
    border-radius: 0 40px 40px 0;
    border-top: 1px solid ${color.grayBorder};
    border-right: 1px solid ${color.grayBorder};
    border-bottom: 1px solid ${color.grayBorder};
    background-color: ${color.buttonLight};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 38px;
    width: 64px;
    &:hover{
      background-color: ${color.buttonLightHover};
    }
  }
`