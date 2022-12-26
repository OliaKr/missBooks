import { bookService } from "../services/book.service";
import { BookPreview } from "./book-preview.jsx";

export function BookList({books}) {
    // console.log('props are:', books);

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book ={book}/>

            </li> )
    
        }

    </ul>
    
    
}