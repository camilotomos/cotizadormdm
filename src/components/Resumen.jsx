import { Fragment } from "react";
import styled from "@emotion/styled";

const Th = styled.th`
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(20,50,90,.25);
    background: rgba(0, 102, 255, 0.969);
    text-align: center;
    color: #FFFFFF;
    font-weight: 300;
    display: table-cell;
    vertical-align: inherit;

    @media(max-width: 500px){
    display: block;
}
`;

const ThResumen = styled.th`
    padding: 0.3rem 0.8rem;
    border: 1px solid rgba(20,50,90,.25);
    background: #26C6DA;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    font-family: 'Red Rose', cursive;
    font-size: 1.2rem;
    display: table-cell;
    vertical-align: inherit;

    @media(max-width: 500px){
    display: block;
}
@media(min-width: 768px){
        padding: 0.5rem 0.8rem;
}
`;

const ThImplementacion= styled.th`
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(20,50,90,.25);
    background: rgba(23, 41, 197, 0.685);
    text-align: center;
    color: #FFFFFF;
    font-weight: 300;
    display: table-cell;
    vertical-align: inherit;

    @media(max-width: 500px){
    display: block;
}
@media(min-width: 768px){
        padding: 0.5rem 0.8rem;
}
`;

const Td = styled.td`
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(16,76,167,.25);
    background: rgba(90,156,255,.25);
    text-align: center;
    @media(max-width: 500px){
    display: block;
}
@media(min-width: 768px){
        padding: 0.5rem 0.8rem;
}
`;

const TdTotal = styled.td`
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(16,76,167,.25);
    background: rgba(90, 156, 255, 0.429);
    text-align: center;
    @media(max-width: 500px){
    display: block;
    font-weight: bold;
}
    @media(min-width: 768px){
        padding: 0.5rem 0.8rem;
}
`;

const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 0.2rem;
    margin: 0 auto;
    @media(max-width: 500px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
}
`;

const Contenedor = styled.div`
    min-width: 100%; /*600px media query */
    margin: 2rem auto;
    border-radius: 1rem;

  @media(min-width: 768px){
    max-width: 60rem;
}


`;

const Resumen = ({datos}) => {

    //Destructurando Datos

    const {
        tipoDeLicencia,
        tiempoDeContrato,
        cantidadDeLicencias,
        valorUnitarioCliente,
        valorMes,
        valorTotalContrato,
        valorImplementacion,
        totalContratoConImplementacion,
        } = datos;

        //verifico que ningun campo llegue vacio
        if (tipoDeLicencia === '' || tiempoDeContrato === '' || cantidadDeLicencias === ''||
            valorUnitarioCliente === '' || valorMes === '' || valorTotalContrato === '' ||
            valorImplementacion === '' || totalContratoConImplementacion === '') return null; 
            //Si se cumple alguno retorno vacio no continua la ejecucion
            
    return ( 
        <Fragment>
            <h2>Valores Cliente Asociados a las Licencias</h2>

        <Contenedor>
            <Table>
            <tr>
                <Th scope="row">Tipo de Licencia - {tipoDeLicencia}</Th>
                <Th>VALOR LICENCIA</Th>
                <Th>CANTIDAD LICENCIAS</Th>
                <Th>VALOR TOTAL MES</Th>
                <Th>TIEMPO CONTRATADO</Th>
                <Th>VALOR TOTAL CONTRATO</Th>
            </tr>

            <tr>
                <Th>Valor Licencias</Th>
                <Td>USD {valorUnitarioCliente}</Td>
                <Td>{cantidadDeLicencias}</Td>
                <Td>USD {valorMes}</Td>
                <Td>{tiempoDeContrato}</Td>
                <Td>USD {valorTotalContrato}</Td>
            </tr>

            <tr>
                <ThImplementacion>Valor Implementación</ThImplementacion>
                <Td colSpan="4">UNICO PAGO</Td>
                <Td>USD {valorImplementacion}</Td>
            </tr>

            <tr>
                <ThResumen>RESUMEN</ThResumen>
                <TdTotal colSpan="4">VALOR TOTAL CONTRATO</TdTotal>
                <TdTotal>USD {totalContratoConImplementacion}</TdTotal>
            </tr>

            </Table>
        </Contenedor>
        </Fragment>
     );
}
 
export default Resumen;