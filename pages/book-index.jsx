const { useState, useEffect } = React
import { bookService } from '../services/book.service.js'
import { BookList} from '../cmps/book-list.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';


export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    const [books, setBooks] = useState([])

    useEffect(() => {
        console.log('Loading books...');
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        
        bookService.query(filterBy).then(booksToUpdate => {
            // console.log("booksToUpdate",booksToUpdate);
            setBooks(booksToUpdate)
            // console.log('books after setState', books);
        })
    }
    

    function onSetFilter(filterByFromFilter) {
        // console.log('filterBy from bookIndex', filterBy);
        setFilterBy(filterByFromFilter)
        
    }

    // console.log('filterBy from bookIndex', filterBy);
    // console.log('books', books);

    return <section className="book-index ">
        <h1>Hello library!</h1>
        {/* {JSON.stringify(books)} */}
        <BookFilter onSetFilter={onSetFilter}/>

        <BookList books={books}/>

    </section>
    




}