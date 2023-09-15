import { } from 'react'

function Contato(){

    const validarFormulario = ()=> {
        let nomeInput =  document.getElementById("nome").value
        let telInput = document.getElementById("telefone").value
        let emailInput = document.getElementById("email").value

        if(nomeInput == "" || telInput == "" || emailInput == ""){
            alert("Por favor, preencha todos os campos.")
        }else{
            alert("Seus dados foram registrados com sucesso.")
        }
    }

    return(
        <>
        <h1>CONTATOOOO</h1>
        <div className="form-container">
            <div className="form-header">
                <h2>Contato</h2>
            </div>
            
            <form className="form">
                <div className="form-content">
                    <label htmlFor="nome"><strong>Nome:</strong></label>
                    <input type="text" id="nome" name="nome" placeholder="Digite o seu nome..."/>
                </div>
    
                <div className="form-content">
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="text" id="email" name="email" placeholder="Digite o seu email..."/>
                    
                </div>
                
                <div className="form-content">
                    <label htmlFor="telefone"><strong>Telefone:</strong></label>
                    <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone..."/>
                </div>
                
                <div className="form-btn"><button type="submit" onClick={validarFormulario()}>Enviar</button></div>
            </form>
        </div> 
        </>
    )
}

export default Contato