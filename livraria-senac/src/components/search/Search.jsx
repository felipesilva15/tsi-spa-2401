import { useState } from "react";
import { Container } from "../styles/Containers";
import { Input, Text, Title } from "../styles/Texts";
import SearchResult from "./SearchResult";

const baseUrl = 'http://localhost:8000'

const Search = () => {
    const [query, setQuery] = useState('');
    const [book, setBook] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${baseUrl}/books/${query}`);

            if (!res.ok) {
                setBook(null)
            }

            const data = await res.json();
            console.log(data);
            setBook(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container direction="column">
            <Title>Encontre seu próximo livro</Title>
            <Text>Explore por título o livro desejado</Text>
            <Input
                placeholder="Digite o nome de um livro..."
                value={query}
                onChange={ (e) => {setQuery(e.target.value)} }
            />
            <button onClick={ (e) => {handleSubmit(e)} }>Pesquisar</button>
            <SearchResult book={book}></SearchResult>
        </Container>
    );
};

export default Search;