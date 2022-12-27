const { useState } = React
import { bookService } from "../services/book.service.js"

export function AddReview({ onSaveReview }) {
    const [review, setReview] = useState(bookService.getDefaultReview())
    console.log('review', review);

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === "range" ? +value : value
        setReview((prevReview => {
            return { ...prevReview, [field]: value }
        }))
    }

    function onSubmitReview(ev) {
        ev.preventDefault()
        onSaveReview(review)
        
    }


    return <article className="add-review">
        <h2>Rate this book</h2>
        <form onSubmit={onSubmitReview}>

            <label >Full Name</label>

            <input type="text"
                id="full-name"
                placheholder="Enter full name..."
                name="fullName"
                value={review.fullName}
                onChange={handleChange}
            />
            <label >Rate this book...</label>
            <input type="range"
                id="rating"
                max="5"
                min="1"
                name="rating"
                value={review.rating}
                title={review.rating}
                onChange={handleChange}
            />
            <label >Read at:</label>
            <input type="date"
                id="readAt"
                name="readAt"
                value={review.readAt}
                onChange={handleChange}/>
            
            <button>Submit</button>


        </form>
    </article>
}