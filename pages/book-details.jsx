
const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM


import { bookService } from '../services/book.service.js'
import { LongTxt } from '../cmps/long-txt.jsx'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function BookDetails() {
    const [book, setBook] = useState(null)
    const { bookId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then((book) => setBook(book))
    }

    function onGoBack() {
        navigate(-1)
    }





    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <h2>Title: {book.title}</h2>
        <h3>Subtitle : {book.subtitle}</h3>
        <h3>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3>

        <button onClick={onGoBack}>Go Back</button>

    </section>
}