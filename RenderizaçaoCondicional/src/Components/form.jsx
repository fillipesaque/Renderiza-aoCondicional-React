import { useState } from "react"

function Condicional (){

    const[email , setEmail] = useState() /* state para monitorar o valor do input */
    const[userEmail , setUserEmail] = useState()    /* state para pegar o valor do input */

    function EnviarEmail (ev){
        ev.preventDefault() /* metodo para 'enviar' o email */
        setUserEmail(email) /* setUserEmail = email */
    }

    function LimparEmail (){
        setUserEmail('') /* metodo para limpar o email */
    }

    return(
        <div>
            <h2>Renderizaçao Condicional</h2>
            <form>

                <input 
                type="email" 
                placeholder="Digite seu e-mail aqui .."
                onChange={(ev) => setEmail(ev.target.value)} /* ouvindo o valor do input */
                 />

                <button onClick={EnviarEmail}>
                    Enviar e-mail
                </button>

            {/*usando a varialve userEmail para Aplicar Logicas Js  */}
            {/* se tiver um email na varial userEmail entao exibira o conteudo da div */}
                {userEmail && ( 
                    <div>
                        <p> O e-mail do usuario e: {userEmail}</p>
                        <button onClick={LimparEmail}>Limpar E-mail</button> {/* faz com q a variavel userEmail seja false sendo assim n exibira o conteudo */}
                    </div>
                )}

            </form>
        </div>
    )
}

export default Condicional