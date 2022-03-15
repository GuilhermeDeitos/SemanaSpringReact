/* eslint-disable react-hooks/rules-of-hooks */

import { Link, useNavigate } from 'react-router-dom'; //Importação
import axios, {AxiosRequestConfig} from "axios"
import React, { useEffect, useState } from 'react';
import {Movie} from "../../types/movies"
import {BASE_URL} from "../../utils/requests"
import { validateEmail } from "../../utils/validate"
import './styles.css'

type Props = {
    movieId: string
}

function formCard({movieId} : Props){
    const navigate = useNavigate()

    const [movie, setMovie] = useState<Movie>()

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(response => {
            setMovie(response.data)
        })
    })
    
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const email = (event.target as any).email.value
        const score = (event.target as any).score.value

        if(!validateEmail(email)){ return }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }
    

        axios(config).then(response => {navigate("/")})
    }
    


    return(
        <div className="dsmovie-form-container">
            <img className="dsmovie-card-image" src= {movie?.image} alt={movie?.title} />
            <div className=" dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>{/*Formulário para avaliação do filme*/}
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" id="email" className="form-input"  placeholder='example@seuDominio.com'/>
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select name="form-score" id="score">    
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
                <Link to="/"> {/* Ir para a rota '/' caso clicar em cancelar */}
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div>    
        </div>
    );
}

export default formCard //Exportação do componente