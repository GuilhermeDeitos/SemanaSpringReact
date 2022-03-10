//Criação do componente a partir da imagem
import{ReactComponent as GithubIcon} from '../../assets/img/github.svg' 

import './styles.css'

function navbar(){
    return (
        <header>
          <nav className="container">
            <div className="dsmovie-nav-content">
              <h1>DSMovie</h1>  
              <a href="https://github.com/GuilhermeDeitos"> 
                <div className="dsmovie-contact-container">
                  <GithubIcon/>
                  <p className="dsmovie-contact-link">/GuilhermeDeitos</p>
                </div>
              </a>
            </div>  
    
          </nav>
        </header>
      );
}

export default navbar //Exportação do componente