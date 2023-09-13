import { Link } from "react-router-dom"

function Nav (){
return (
    <div>
        <Link to="/">SmartTrash</Link>
        <Link to="/Lixeira Inteligente">Lixeira Inteligente</Link>
        <Link to="/Aplicativo">Aplicativo</Link>
        <Link to="/Coleta Seletiva">Coleta Seletiva</Link>
        <Link to="/Feedbacks">Feedbacks</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Contato">Contato</Link>
    </div>
)
}

export default Nav
