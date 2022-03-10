/* eslint-disable react/jsx-no-comment-textnodes */
//Importação do componente Link e CSS
import { Link } from 'react-router-dom';
import './styles.css'

function form(){
    //Objeto movie apenas para exemplo
    const movie = {
        id:1, 
        image:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yaX5hliSF1rwZ9WVNbUchndjFSb.jpg",
        title: "Demon Slayer - Mugen Train: O Filme",
        count: 2, 
        score: 4.5

    }

    return(
        <div className="dsmovie-form-container">
            <img className="dsmovie-card-image" src= {movie.image} alt={movie.title} />
            <div className=" dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>

                <form className="dsmovie-form">//Formulário para avaliação do filme
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" id="email" className="form-input"  placeholder='example@seuDominio.com'/>
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select name="form-score" id="score">
                            <option></option>    
                            <option>1</option>    
                            <option>2</option>    
                            <option>3</option>    
                            <option>4</option>    
                            <option>5</option>    
                        </select>
                    </div>
                    <div className="dsmovie-form-saveButton">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form> 
                <Link to="/"> //Ir para a rota '/' caso clicar em cancelar
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div>    
        </div>
    );
}

export default form //Exportação do componente