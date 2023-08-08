import styled from "@emotion/styled";
import { useState } from "react";
import {obtenerCalculos, obtenerCostoImplementacion} from '../helper';

const FormularioDiv = styled.div `
    display: flex;
    margin-bottom: 1.5rem;
    align-items: center;
    font-size: 1.4rem;
`;

const FormularioLabel = styled.label `
    flex: 0 0 12rem;
`;

const FormularioSelect = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 1rem;
    -webkit-appearance: none;
    
`;

const FormularioTiempo = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 1rem;
    -webkit-appearance: none;
    
`;


const FormularioInput = styled.input`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 1rem;
    -webkit-appearance: none;
    
`;

const FormularioRadio = styled.input`
    margin: 0 1rem;
`;

const FormularioButton = styled.button`
    background-color: #1e025f;
    font-size: 1.8rem;
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 0.8rem 0rem 0.8rem 0rem;
    transition: background-color .8s ease;
    transition: color .8s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26C6DA;
        color: #1e025f;
    }
`;

const Error = styled.div`
     background-color: #df9c02;
     color: #FFFFFF;
     padding: 1rem;
     width: 100%;
     text-align: center;
     border-radius: 0.8rem;
     margin-bottom: 2rem;
     font-size: 1.4rem;
     font-weight: bold;
`;

const Formulario = () => {

    //Crear las variables del state
    const [datos, guardarDatos] = useState({
        licencia: '',
        tiempo: '',
        cantidad: '',
        implementacion: ''
    });

    //Manejo de los errores
    const [error, guardarError] = useState(false);

    //Extraer los valores del state
    const {licencia, tiempo, cantidad, implementacion} = datos;

    //Leer los datos del formuario y colocarlos en el state
    const obtenerInformacion = e => {  
            guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
         
        });
    }

    //Cuando el usuario preciona el boton de Cotizar
    const cotizarLicencias = e => {
        e.preventDefault();


        if(licencia.trim() === '' || tiempo.trim() === '' || cantidad.trim() === '' || implementacion.trim() === ''){
            guardarError (true);
            return;
        }
        
        //Cuando todos los campos estan llenos
        guardarError(false);

        //Verificar el tipo de licencias 
        const tipoDeLicencia = licencia;
        //Verificar el tiempo de contrato
        const tiempoDeContrato = parseInt(tiempo);
        //Verificar la cantidad de licencias y en que rango se encuentra
        const cantidadDeLicencias = parseInt(cantidad);
        //Aplica o no implementacion
        const valorImplementacion = obtenerCostoImplementacion(implementacion);
        console.log(valorImplementacion);
        
        //Realizando los calculos
        const calculos = obtenerCalculos (tipoDeLicencia, tiempoDeContrato, cantidadDeLicencias);
        console.log(calculos)
        //Resumen de resultados
        
        //1 - Valor unitario de licencia
        let valorUnitarioCliente = parseFloat (calculos).toFixed(2);
        console.log(valorUnitarioCliente);
        //2. Cantidad de licencias 
        console.log(cantidadDeLicencias);
        //3. Valor Mes
        let valorMes = parseFloat (valorUnitarioCliente * cantidadDeLicencias).toFixed(2);
        console.log(valorMes);
        //4. Tiempo de contrato
        console.log(tiempoDeContrato);
        //5. Total contrato
        let valorTotalContrato = parseFloat (valorMes * tiempoDeContrato).toFixed(2);
        console.log(valorTotalContrato);

    }
    return ( 
        <form
            onSubmit={cotizarLicencias}
        >

            {/* manejo del error con un ternario */}
            {error ? <Error>Todos los campos son Obligatorios</Error> : null}


            <FormularioDiv>
                <FormularioLabel >Tipo de Licencia</FormularioLabel>
                <FormularioSelect
                    name="licencia"
                    value={licencia}
                    onChange={obtenerInformacion}
                >
                    <option value="">** Seleccione el Tipo **</option>
                    <option value="starter">Starter</option>
                    <option value="business">Business</option>
                    <option value="enterprise">Enterprise</option>
                </FormularioSelect>
            </FormularioDiv>

            <FormularioDiv>
                <FormularioLabel >Tiempos del contrato</FormularioLabel>
                <FormularioTiempo
                    name="tiempo"
                    value={tiempo}
                    onChange={obtenerInformacion}
                >
                    <option value="">** Seleccione el Tiempo **</option>
                    <option value="12">12 Meses</option>
                    <option value="24">24 Meses</option>
                    <option value="36">36 Meses</option>
                </FormularioTiempo>
            </FormularioDiv>

            <FormularioDiv>
                <FormularioLabel>Canidad de Licencias</FormularioLabel>
                <FormularioInput
                    type="number"
                    min="1"
                    placeholder="Ingresa la cantidad"
                    name="cantidad"
                    value={cantidad}
                    onChange={obtenerInformacion}
                />
            </FormularioDiv>

            <FormularioDiv>
                <FormularioLabel>Aplica Implementación?</FormularioLabel>
                <FormularioRadio
                    type="radio"
                    name="implementacion"
                    value="si"
                    checked={implementacion === "si"}
                    onChange={obtenerInformacion}
                />Si

                <FormularioRadio
                    type="radio"
                    name="implementacion"
                    value="no"
                    checked={implementacion === "no"}
                    onChange={obtenerInformacion}
                />No
            </FormularioDiv>

            <FormularioButton type="submit">Cotizar</FormularioButton>

        </form>
     );
}
 
export default Formulario;