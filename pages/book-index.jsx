const { useState, useEffect } = React
import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';
import { BookDetails } from './book-details.jsx';
import {UserMsg} from '../cmps/user-msg.jsx'



export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    // const [selectedBook, setSelectedBook] = useState(null)
    const [userMsg, setUserMsg] = useState('remove book')
  

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

    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                const updateBooks = books.filter(book => book.id !== bookId)
                setBooks(updateBooks)
                flashMsg('Book removed!')
                
            })
    }

    // function onSelectBook(bookId) {
    //     console.log('bookId', bookId);
    //     bookService.get(bookId).then((book) => {
    //         setSelectedBook(book)
    //     })
    // }

    function flashMsg(msg) {
        setUserMsg(msg)
        setTimeout(() => {
            setUserMsg('')
        }, 3000)
        
    }

    console.log('user msg', userMsg);
    // console.log('books', books);

    return <section className="book-index ">
        {userMsg && <UserMsg msg={userMsg} />}
        <div className="full main-layout">
            {/* <h1>Hello library!</h1> */}
            {/* {JSON.stringify(books)} */}
            <BookFilter onSetFilter={onSetFilter} />
            <BookList books={books} onRemoveBook={onRemoveBook}  />

        </div>
        {/* {selectedBook && <BookDetails
            book={selectedBook}
            onGoBack={() => setSelectedBook(null)}

        />} */}

    </section>





}