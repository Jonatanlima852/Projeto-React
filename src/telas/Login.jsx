import React, { useEffect } from 'react'
import "./Login.css"
import { useState } from 'react'


const MudarDeEstado = (props) => {

const [Email, setEmail] = useState("")

const [Password, setPassword] = useState("")

const [enviou, setEnviou] = useState("Preencha as informações para realizar o login") 



return (
  
  <div className="forms">
    <div className="corpo_do_formulário">
     <h1>Login</h1>
     <p className="enviou">{enviou}</p>
    </div>
 
    <div>
      <label for="Email">Email:</label>
      <input type="email" name="Email" id="Email" placeholder="Digite seu email..."
       value={Email} onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div>
      <label for="Senha">Senha:</label>
      <input type="password" name="Senha" id="Senha" placeholder="Digite sua senha..." 
       value={Password} onChange={(e) => setPassword(e.target.value)}/>
    </div>

    <button className="botão" 
      onClick={(e) => setEnviou("O formulário para login foi enviado!")}>Enviar!</button>


   <div id="Esqueci">
     <a href="#">Esqueci minha senha</a>
   </div>
   
   <div id="Registro">
     <p>Ainda não possui uma conta? <br></br>
     <a href="#">Registre-se aqui</a>
     </p>
   </div>
   
</div>

)
}

export default MudarDeEstado
