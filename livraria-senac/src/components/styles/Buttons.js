import styled from "styled-components";

const Button = styled.button`
    margin: ${props => props.margin || '0'};
    border-radius: 0.25rem;
    background-color: ${props => props.backgroundColor || '#008CBA'};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: none;
    color: ${props => props.color || 'white'};
    cursor: pointer;
    font-weight: ${props => props.fontWeight || 'bold'};;
`;

export { Button };