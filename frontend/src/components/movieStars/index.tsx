//Criação dos componentes com as imagens das estrelas
import {ReactComponent as StarFull} from '../../assets/img/star-full.svg'
import {ReactComponent as StarHalf} from '../../assets/img/star-half.svg'
import {ReactComponent as StarEmpty} from '../../assets/img/star-empty.svg'
import './styles.css'

function movieStars(){
    return(
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div className="dsmovie-stars-container">
            //Utilização do componente
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    )
}

export default movieStars //Exportação do componente