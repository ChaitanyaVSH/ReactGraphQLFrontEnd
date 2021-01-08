import React, {useState} from "react";
import {graphql} from "react-apollo";
import {getBooksQuery} from "../queries/queries";
import BookDetails from "./BookDetails";


const BookList = ({data}) => {

    const {loading, error, books } = data;

    const [currentBookId , setCurrentBookId] = useState("")


    if(loading)
        return <h1>Fetching the data...</h1>


    else if(error)
        return <h1>Error while fetching the data...</h1>

    else
        return(
            <div className="bookList">
                {books.map((book)=>(
                    <div className="book" key={book.id} onClick={()=>{setCurrentBookId(book.id)}}>
                        <h1>{book.name}</h1>
                    </div>
                ))}
                <BookDetails bookid={currentBookId}/>
            </div>
        );
}

export default graphql(getBooksQuery)(BookList);
