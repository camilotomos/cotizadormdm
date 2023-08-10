import { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";



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

  const [resumen, guardarResumen] = useState ({
    datos:{
    tipoDeLicencia: '',
    tiempoDeContrato: '',
    cantidadDeLicencias: '',
    valorUnitarioCliente: '',
    valorMes: '',
    valorTotalContrato: '',
    valorImplementacion: '',
    totalContratoConImplementacion: '',
    }
  });

  //Cargar el Spinner
  const [cargando, guardarCargando] = useState (false);

  //Extrar la inforamcion para resumen
  const {datos} = resumen;

  return (
  <Contenedor>
    <Header 
        titulo = 'Cotizador de licencias MDM'
    />

    <ContenedorFormulario>
      <Formulario
        guardarResumen={guardarResumen}
        guardarCargando = {guardarCargando}
      />

      {cargando ? <Spinner /> : null}
      

      <Resumen 
        datos = {datos}
      />

    </ContenedorFormulario>

  </Contenedor>
  );
}

export default App;
