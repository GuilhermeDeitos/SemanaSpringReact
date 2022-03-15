
//Componentes de Rotas do próprio react
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//Componentes de paginas
import Listing from './pages/listing'; 
import Form from './pages/form';

//Componentes de blocos das paginas
import Navbar from "./components/navbar";

function App() {
  return (
    //iniciar configuração das rotas
    <BrowserRouter> 
      <Navbar />  {/* Utilização do componente Navbar */}
      <Routes>  {/* Configuração rota por rota */}
        <Route path="/" element={<Listing />} />  {/*Pagina  principal*/}
        <Route path="/form">  {/* Rota dos formulários com a subrota que possuí o id do filme */}
          <Route path=":movieId" element={<Form />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; //Exportação do componente