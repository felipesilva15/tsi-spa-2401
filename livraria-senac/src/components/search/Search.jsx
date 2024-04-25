import { useState } from "react";
import { Container } from "../styles/Containers";
import { Input, Text, Title } from "../styles/Texts";
import SearchResult from "./SearchResult";
import { Button } from "../styles/Buttons";

const baseUrl = 'http://localhost:8080'

const Search = () => {
    const [query, setQuery] = useState('');
    const [book, setBook] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${baseUrl}/books/${query}`);

            if (!res.ok) {
                setBook(null);
                return;
            }

            const data = await res.json();
            console.log(data);
            setBook(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container direction="column" width="100%" padding="36px">
            <Title>Encontre seu próximo livro</Title>
            <Text>Explore por título o livro desejado</Text>
            <Container direction="column" gap="18px" width="100%">
                <Input
                    placeholder="Digite o nome de um livro..."
                    value={query}
                    onChange={ (e) => {setQuery(e.target.value)} }
                />
                <Button margin="0 12px" type="button" onClick={ (e) => {handleSubmit(e)} }>Pesquisar</Button>
                <SearchResult book={book}></SearchResult>
            </Container>
        </Container>
    );
};

export default Search;