import { useEffect, useState } from "react"
import { Card } from "../styles/Card";
import { BookImage } from "../styles/Images";
import { BookTitle, Price, Text } from "../styles/Texts";

const baseUrl = 'http://localhost:8000'

function MostSearched() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await fetch(`${baseUrl}/books`);  
                const data = await res.json();

                console.log(data);
                setBooks(data);
            } catch (err) {
                console.error(err);
            }
        };

        getBooks();
    }, []);

    return (
        <>
            {
                books.map((book) => {
                    return (
                    <Card>
                        <BookTitle>{book.title}</BookTitle>
                        <Text color="black">{book.author}</Text>
                        <BookImage src={book.image}></BookImage>
                        <Text color="green">{book.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                    </Card>)
                })
            }
        </>
    );
}

export default MostSearched;