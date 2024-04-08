import styled from "styled-components";

const Menu = styled.nav`
    display: flex;
    min-height: 80px;
    background-color: #FFF;
    align-items: center;
    justify-content: space-around;
`;

const BooksContainer = styled.div`
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    min-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`;

const Container = styled.div`
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    min-width: 400px;
    width: ${props => props.width || 'unset'};
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: center;
    justify-content: center;
    gap: ${props => props.gap || '0'};
`;

export { Menu, BooksContainer, Container };