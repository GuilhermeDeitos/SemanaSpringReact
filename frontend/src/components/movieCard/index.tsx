/* eslint-disable react/jsx-no-comment-textnodes */
//Importação dos componentes
import { Link } from "react-router-dom" 
import {Movie} from "../../types/movies"
import MovieScore from "../movieScore" 

type Props = {
    movie: Movie
}

function movieCard({movie}:Props){
    //Objeto para testes com as informações de um filme
    return(
        <div>
           {/*Construção do cartão do filme como componente*/}
            <img  className="dsmovie-card-image" src={movie.image} alt={movie.title} /> 
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score}/> {/*Utilização do componente com o score do filme*/}

                {/*Utilização do componente Link, ele irá linkar o botão avaliar à rota do formulário daquele filme*/}
                <Link to={`/form/${movie.id}`}> 
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}

export default movieCard //Exportação do componente