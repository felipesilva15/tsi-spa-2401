import { Card } from "../styles/Card";
import { BooksContainer } from "../styles/Containers";
import { BookImage } from "../styles/Images";
import { BookTitle, Text } from "../styles/Texts";

const SearchResult = ({book}) => {
    if (!book || !book.title) {
        return <p>Nenhum livro encontrado!</p>
    }

    return (
        <BooksContainer>
            <Card>
                <BookTitle>{book.title}</BookTitle>
                <Text color="black">{book.author}</Text>
                <BookImage src={book.image}></BookImage>
                <Text color="green" weight="bold">{book.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
            </Card>
        </BooksContainer>
    )
};

export default SearchResult;