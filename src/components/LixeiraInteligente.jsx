import { useState } from 'react'
import FotoLixeira from '../assets/img/lixeiras.png'

function LixeiraInteligente() {
    const [quantNoCarrinho, setQuantNoCarrinho] = useState(0);

    const adicionarAoCarrinho = () => {
        const novaQuant = quantNoCarrinho + 1;
        setQuantNoCarrinho(novaQuant);
        alert(`Você adicionou a Lixeira Inteligente ${novaQuant} vez(es) ao carrinho, nesta sessão.`);
    };    

    return (    
        <>
        <div className="container bg">
            <div className="container-text bg">
                <h2>Lixeira Inteligente</h2>
                <img src={FotoLixeira} alt="lixeiras" id="lixeira-inteligente-img"/>
                <p className="texto">A nossa solução é uma lixeira inteligente que utiliza tecnologia de ponta para  identificar e separar automaticamente os diferentes tipos de lixo, facilitando a coleta seletiva e aumentando a reciclagem. Com compartimentos separados para resíduos orgânicos, recicláveis e não recicláveis, a lixeira inteligente garante que cada tipo de lixo seja depositado no lugar correto, evitando a contaminação e a poluição do meio ambiente. Com a nossa solução, é possível contribuir para a preservação do meio ambiente e para a promoção de um estilo de vida mais sustentável. A lixeira inteligente é uma maneira fácil e conveniente de fazer a sua parte pela reciclagem e pelo futuro do planeta.</p>
                <button className="btn" onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button>
            </div>
        </div>
        </>
    )
}

export default LixeiraInteligente
