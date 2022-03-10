/* eslint-disable react/jsx-no-comment-textnodes */
//Criação do componente a partir da imagem
import {ReactComponent as Arrow} from '../../assets/img/arrow.svg'
import './styles.css'

function pagination() {
    return(
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true}> //habilitar o botão pois nesse exemplo é a primeira pagina
                    <Arrow/>
                </button>   
                <p>{`${1} de  ${3}`}</p> //Numeros de exeplo apenas para visualização
                <button className="dsmovie-pagination-button" disabled={false}>
                    <Arrow className="dsmovie-arrow-flip"/>
                </button>
            </div>
            
        </div>
    )
}

export default pagination //Exportação do componente