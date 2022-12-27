
const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { AddReview } from '../cmps/add-review.jsx';
import { bookService } from '../services/book.service.js'
import { LongTxt } from '../cmps/long-txt.jsx'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'


export function BookDetails() {
    const [book, setBook] = useState(null)
    const [nextBookId, setNextBookId] = useState(null)
    const { bookId } = useParams()
  
    // console.log('params are:',params);

    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [bookId])

    function loadBook() {
        bookService.get(bookId)
            .then((book) => setBook(book))
            bookService.getNextBookId(bookId)
            .then(setNextBookId)
    }

    function onGoBack() {
        navigate(-1)
    }

    function getPageCount(pageCount) {
        if (pageCount >= 500) return 'Serious reading'
        else if (pageCount >= 200) return 'Descent reading'
        else if (pageCount < 100) return 'Light reading'
    }

    function getPublishedDate(year) {
        const yearNow = new Date().getFullYear()
        const diff = yearNow - year
        if (diff >= 10) return 'Vintage'
        else if (diff <= 1) return 'New'
    }

    function getPriceColor() {
        if (book.price >= 150) return 'red'
        else if (book.price <= 20) return 'green'
        else return 'black'
    }

    function onSaveReview(reviewToAdd) {
        bookService.saveReview(book.id, reviewToAdd)
            .then((review) => {
                const reviews = [review, ...book.reviews]

                setBook({ ...book, reviews })
                console.log("reviews,", reviews);
            })
            .catch((err) => {
                console.log('err:', err);

            })
    }


    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <h2>Title: {book.title}</h2>
        <h3>Subtitle : {book.subtitle}</h3>
        {book.listPrice.isOnSale && <img className="icon" src="assets/style/img/sale.png"></img>}

        {/* <h3>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3> */}
        <h3 style={{ color: getPriceColor() }}>Price:{book.price}</h3>
        <h3>{getPageCount(book.pageCount)}</h3>

        <h3>{getPublishedDate(book.publishedDate)}</h3>

        <LongTxt txt={book.description} length={100} />
        <img src={`${book.thumbnail}`} alt="book image" />

        <AddReview onSaveReview={onSaveReview} />
        {(!book.reviews) && <span className="title">No reviews yet</span>}


        <button onClick={onGoBack}>Go Back</button>

        <Link to={`/book/${nextBookId}`}>Next Book</Link>

    </section>
}