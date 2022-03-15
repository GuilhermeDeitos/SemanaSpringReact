//Importação do componente com as estrelas de avaliação e do css
import MovieStars from "../movieStars"
import './styles.css'

type Props = {
    score: number
    count: number
}

function movieScore({score, count}: Props){
    //Valores apenas para demonstração

    return(
        <div className="dsmovie-score-container">
            {/*Abaixo temos a seguinte lógica: Caso o score for maior que 0 ele irá formatar para ter apenas um numero após a virgula, caso contrário mostrará um hifén */}
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>

            <MovieStars score={score} />{/*Utilização do componente*/}
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default movieScore //Exportação do componente