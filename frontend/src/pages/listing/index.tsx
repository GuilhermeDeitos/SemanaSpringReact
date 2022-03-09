import Pagination from "../../components/pagination"
import MovieCard from "../../components/movieCard"



function listing(){
    return(
        <div>
            <Pagination/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
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
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard/>
                        
                    </div>
                    
                    
                    
                </div>
            </div>
            



        </div>
    )
}

export default listing