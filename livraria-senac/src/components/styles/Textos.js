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
`;

export { Title, Subtitle, Text };