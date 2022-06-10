import React from 'react'
import "./Login.css"

const Login = props => (

  <div className="forms">
    <div className="corpo_do_formulário">
     <h1>Login</h1>
     <p>Preencha as informações para realizar o login</p>
    </div>
 
    <div>
      <label for="Email">Email:</label>
      <input type="email" name="Email" id="Email" placeholder="Digite seu email..."/>
    </div>

    <div>
      <label for="Senha">Senha:</label>
      <input type="password" name="Senha" id="Senha" placeholder="Digite sua senha..."/>
    </div>

    <button className="botão">Enviar!</button>


   <div id="Registro">
     <p>Ainda não possui uma conta?
     <a href="#">Registre-se aqui</a>
     </p>
   </div>
</div>

)

export default Login