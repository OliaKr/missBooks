const { Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js";
import { BookPreview } from "./book-preview.jsx";

export function BookList({books, onRemoveBook }) {
    // console.log('props are:', books);

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book ={book} onRemoveBook={onRemoveBook} />
                <div>
                    <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
                    <Link to={`/book/${book.id}`}>Select book</Link>


                </div>



            </li> )
    
        }

    </ul>
    
    
}