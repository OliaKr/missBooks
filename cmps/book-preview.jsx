
export function BookPreview({ book }) {
    const { title, listPrice, thumbnail} = book
    // console.log('show the book', book.thumbnail);

    return <article className="book-preview">
        <h2>Title: {book.title}</h2>
        <img src={thumbnail} />
        <p>Buy now price: {listPrice.amount}</p>
        <h3>Id: {book.id}</h3>

    </article>
}