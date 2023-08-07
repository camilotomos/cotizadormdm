import styled from "@emotion/styled";

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

const Formulario = () => {
    return ( 
        <form>
            <FormularioDiv>
                <FormularioLabel >Tipo de Licencia</FormularioLabel>
                <FormularioSelect>
                    <option value="">** Seleccione **</option>
                    <option value="starter">Starter</option>
                    <option value="business">Business</option>
                    <option value="enterprise">Enterprise</option>
                </FormularioSelect>
            </FormularioDiv>

            <FormularioDiv>
                <FormularioLabel >Tiempo de Contrato</FormularioLabel>
                <FormularioInput
                    type="number"
                    placeholder="Ingresa el Tiempo"
                />
            </FormularioDiv>

            <FormularioDiv>
                <FormularioLabel>Canidad de Licencias</FormularioLabel>
                <FormularioInput
                    type="number"
                    placeholder="Ingresa la cantidad"
                />
            </FormularioDiv>

            <FormularioDiv>
                <FormularioLabel>Aplica Implementación?</FormularioLabel>
                <FormularioRadio
                    type="radio"
                    name="implementacion"
                    value="si"
                />Si

                <FormularioRadio
                    type="radio"
                    name="implementacion"
                    value="no"
                />No
            </FormularioDiv>

            <FormularioButton type="button">Cotizar</FormularioButton>

        </form>
     );
}
 
export default Formulario;