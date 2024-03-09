import { useEffect, useState } from "react"
import { List, ListItem } from "../styles/Lists";

const baseUrl = 'localhost:8000'

function MostSearched() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = fetch(`${baseUrl}/books`);
                const data = await res.json();

                setBooks(data);
            } catch (error) {
                console.error(error);
            }
        };

        getBooks();
    }, books);

    return (
        <>
            <List>
                {
                    books.map((book) => {
                        return <ListItem>{book.title ? book.title : 'Not found'}</ListItem>
                    })
                }
            </List>
        </>
    );
}

export default MostSearched;