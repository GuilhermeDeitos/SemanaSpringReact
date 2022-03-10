/* eslint-disable react/jsx-no-comment-textnodes */
//Importação dos componentes previamente criados
import Pagination from "../../components/pagination"
import MovieCard from "../../components/movieCard"



function listing(){
    return(
        <div>
            <Pagination/> //Utilização do componente
            <div className="container"> //Utilizando a classe row do bootstrap
                <div className="row"> //Utilizando a classe row do bootstrap
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> //Utilizando a classe col  do bootstrao para referencar as colunas, junto é utilizado algumas classes de responsividade da mesma biblioteca e o numero de cards nessas opções
                    
                        <MovieCard/> //Utilização do componente
                        
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard/>
                        
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard/>
                        
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard/>
                        
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard/>
                        
                    </div>
                    
                    
                    
                </div>
            </div>
            



        </div>
    )
}

export default listing //Exportação do componente