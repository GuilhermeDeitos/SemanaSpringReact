/* eslint-disable react/jsx-no-comment-textnodes */
//Importação do componente com as estrelas de avaliação e do css
import MovieStars from "../movieStars"
import './styles.css'

function movieScore(){
    //Valores apenas para demonstração
    const score = 3.5
    const count = 13

    return(
        <div className="dsmovie-score-container">

             //Abaixo temos a seguinte lógica: Caso o score for maior que 0 ele irá formatar para ter apenas um numero após a virgula, caso contrário mostrará um hifén 
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>

            <MovieStars />//Utilização do componente
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default movieScore //Exportação do componente