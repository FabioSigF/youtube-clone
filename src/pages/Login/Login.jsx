import React, { useState } from 'react'

//Auth
import { auth, googleProvider } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

//Style
import { Wrapper } from './Login.styles'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }

  const logout = async () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper>
      <h1>Criar Conta</h1>
      <form>
        <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Login</button>
        <button onClick={logout}>Logout</button>
        <button onClick={signInWithGoogle}>Entrar com Google</button>
      </form>
    </Wrapper>
  )
}
