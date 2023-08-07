import styled from "@emotion/styled";

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 1rem;
    border-radius: 1rem;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    font-family: 'Red Rose', cursive;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    margin: 0;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>
                {titulo}
            </TextoHeader>
        </ContenedorHeader>
     );
}
 
export default Header;