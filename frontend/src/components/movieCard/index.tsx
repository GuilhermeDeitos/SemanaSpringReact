/* eslint-disable react/jsx-no-comment-textnodes */
//Importação dos componentes
import { Link } from "react-router-dom" 
import MovieScore from "../movieScore" 

function movieCard(){
    //Objeto para testes com as informações de um filme
    const movie = {
        id:1, 
        image:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yaX5hliSF1rwZ9WVNbUchndjFSb.jpg",
        title: "Demon Slayer - Mugen Train: O Filme",
        count: 2, 
        score: 4.5
    }

    return(
        <div>
           //Construção do cartão do filme como componente
            <img  className="dsmovie-card-image" src={movie.image} alt={movie.title} /> 
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore/> //Utilização do componente com o score do filme

                //Utilização do componente Link, ele irá linkar o botão avaliar à rota do formulário daquele filme
                <Link to={`/form/${movie.id}`}> 
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}

export default movieCard //Exportação do componente