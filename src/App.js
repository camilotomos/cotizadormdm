import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/formulario";


const Contenedor = styled.div`
   max-width: 90%; /*600px media query */
  margin: 2rem auto;
  border-radius: 1rem;

  @media(min-width: 768px){
    max-width: 60rem;
}
`;



const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
  margin-top: 1rem;
  border-radius: 1rem;
`;

function App() {
  return (
  <Contenedor>
    <Header 
        titulo = 'Cotizador de licencias MDM'
    />

    <ContenedorFormulario>
      <Formulario />
    </ContenedorFormulario>

  </Contenedor>
  );
}

export default App;
