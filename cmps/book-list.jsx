import { bookService } from "../services/book.service.js";
import { BookPreview } from "./book-preview.jsx";

export function BookList({books, onRemoveBook, onSelectBook}) {
    // console.log('props are:', books);

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book ={book} onRemoveBook={onRemoveBook} />
                <div>
                    <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
                    <button onClick={() => onSelectBook(book.id)}>Select book</button>


                </div>



            </li> )
    
        }

    </ul>
    
    
}