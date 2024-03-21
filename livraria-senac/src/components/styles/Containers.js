import styled from "styled-components";

const Menu = styled.nav`
    display: flex;
    min-height: 80px;
    background-color: #FFF;
    align-items: center;
    justify-content: space-around;
`;

const BooksContainer = styled.div`
    min-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`;

const Container = styled.div`
    min-width: 400px;
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: center;
    justify-content: center;
`;

export { Menu, BooksContainer, Container };