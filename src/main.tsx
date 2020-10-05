import React from 'react';
import './styles/main.css'

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
      <div className="main">
          <img src="https://static-assets-prod.unrealengine.com/account-portal/static/static/media/epic-logo-invert.58a41726.png" alt="logo" className="logo"/>

          <form action="" className="formulario">
              <h1>ENTRAR</h1>
              <input 
              type="text" 
              className="pais"
              placeholder= 'País'
              />
              <input 
              type="name" 
              className="fname"
              placeholder ='* Primeiro Nome'
              />
              <input 
              type="name" 
              className="lname"
              placeholder='* Ultimo Nome'
              />
              <input 
              type="text" 
              className="username"
              placeholder='* Nome de usuario'
              />
              <input 
              type='email' 
              className="email"
              placeholder='* Endereço de email'
              />
              <input 
              type="password" 
              className="senha"
              placeholder='* Senha'
              />

              
              <label className="termos" >
            
            <input className="con" type='checkbox' id="teste" />
          
          
              Concordo com todos os termos de serviço
              </label>





              <button className="button">
                  CONTINUE
              </button>
          </form>
      </div>
  )
}

export default Main;