import { bookService } from "../services/book.service.js"
const { useState, useEffect } = React

export function BookFilter({onSetFilter}) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())
    
    // console.log('filterByToEdit', filterByToEdit);

    useEffect(() => {
        onSetFilter(filterByToEdit)
        
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        // console.log('field', field);
        // console.log('value', value);
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }

        })

    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
        
    }

    
    // function handleNameChange(ev) {
    //     console.log('ev', ev)
    //     const { value } = ev.target
    //     setFilterByToEdit((prevFilter) => {
    //         return { ...prevFilter, txt: value }

    //     })

    // }

    return <section className="book-filter full" >
        <h2>Filter our library</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title">Name:</label>
            <input type='text'
                id="title"
                name="txt"
                placeholder="By name"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />


            <label htmlFor="maxPrice">Price:</label>
            <input type="number"
                id="maxPric"
                name="maxPrice"
                placeholder="By price"
                value={filterByToEdit.maxPrice}
                onChange={handleChange}

            />

            {/* <button>Filter the library!</button> */}


        </form>

    </section>

}