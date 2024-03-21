import styled from "styled-components";

const Title = styled.h1`
    font-size: ${props => props.size || '32px'};
    color: ${props => props.color || '#FFF'};
    line-weight: 1.5rem; 
`;

const Subtitle = styled.h2`

`;

const Text = styled.p`
    font-family: 'Arial'
    font-size: ${props => props.size || '12px'};
    color: ${props => props.color || '#FFF'};
    font-weight: ${props => props.weight || 'normal'};
`;

const BookTitle = styled.div`
    height: 2em;
    font-weight: bold;
`;

const Input = styled.input`
    width: 200px;
    height: 50px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #FFF;
    padding: 0 8px;
`;

export { Title, Subtitle, Text, BookTitle, Input };