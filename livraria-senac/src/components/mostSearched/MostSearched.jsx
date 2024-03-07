import { useEffect, useState } from "react"
import { List, ListItem } from "../styles/Lists";

function MostSearched() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = fetch('localhost:8000/books');
                const data = await res.json();

                setBooks(data);
            } catch (error) {
                console.error(error);
            }
        };
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