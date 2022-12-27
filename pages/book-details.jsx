
export function BookDetails({book, onGoBack }) {


    return <section className="book-details">
        <h2>Title: {book.title}</h2>
        <h3>Subtitle : {book.subtitle}</h3>
        <h3>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3>

        <button onClick={onGoBack}>Go Back</button>
        
    </section>
}