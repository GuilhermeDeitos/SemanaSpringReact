/* eslint-disable react/jsx-no-comment-textnodes */
//Importação do componente Link e CSS
import { useParams } from 'react-router-dom';
import FormCard from '../../components/formCard';

function form(){
    //Objeto movie apenas para exemplo
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams()

    return(
        <FormCard movieId={`${params.movieId}`} />
    );
}

export default form //Exportação do componente