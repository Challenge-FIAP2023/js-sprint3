import { } from 'react'
import { Link } from "react-router-dom"

function Nav (){
return (
    <>
        <Link to="home">Smart Trash</Link>
        <Link to="aplicativo">Aplicativo</Link>
        <Link to="lixeira-inteligente">Lixeira Inteligente</Link>
        <Link to="coleta-seletiva">Coleta Seletiva</Link>
        <Link to="feedbacks">Feedbacks</Link>
        <Link to="contato">Contato</Link>
        <Link to="sobre">Sobre</Link>
    </>
)
}

export default Nav
