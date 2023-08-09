import { Fragment } from "react";
import styled from "@emotion/styled";

const Th = styled.th`
    padding: 0.2em 0.8em;
    border: 1px solid rgba(20,50,90,.25);
    background: rgba(0, 102, 255, 0.969);
    text-align: center;
    color: #FFFFFF;
    font-weight: 300;
    display: table-cell;
    vertical-align: inherit;
`;

const Td = styled.td`
    padding: 0.2em 0.8em;
    border: 1px solid rgba(16,76,167,.25);
    background: rgba(90,156,255,.25);
    text-align: center;
`;

const Table = styled.table`
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 0.2rem;
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
                <Th>Valor Implementación</Th>
                <Td colSpan="4">UNICO PAGO</Td>
                <Td>USD {valorImplementacion}</Td>
            </tr>

            <tr>
                <Th></Th>
                <Td colSpan="4">VALOR TOTAL CONTRATO</Td>
                <Td>USD {totalContratoConImplementacion}</Td>
            </tr>

            </Table>
        </Fragment>
     );
}
 
export default Resumen;