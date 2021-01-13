import React, {useState} from "react";

export default function SearchBooks(){

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState({items:[]});

    const searchBooks = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBJBLsoNyueltua8S0l23Msz3am5Etr4TQ&language=en-US&query=${query}&page=1`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setBooks(data);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
        <form className="form" onSubmit={searchBooks}>
            <label className="label" htmlFor="query"><strong>Title or Author</strong></label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Charlotte's Web"
                value={query} onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
            {books.items.map(book => (
                <div className="card">
                    <img className="card--image"
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title + ' cover'}
                    />
                    <div className="card--content">
                        <h3 className="card--title">{book.volumeInfo.title}</h3>
                        <p><small><strong>AUTHOR:</strong> {book.volumeInfo.authors}</small></p>
                        <p><small><strong>GENRE:</strong> {book.volumeInfo.categories}</small></p>
                        <p><small><strong>PUBLISHED:</strong> {book.volumeInfo.publishedDate}</small></p>
                        <p className="card--desc">{book.volumeInfo.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}