import React from "react";
import {graphql} from "react-apollo";
import {getBooksQuery} from "../queries/queries";


const BookList = ({data}) => {

    const {loading, error, books } = data;

    if(loading)
        return <h1>Fetching the data...</h1>


    else if(error)
        return <h1>Error while fetching the data...</h1>

    else
        return(
            <div className="bookList">
                {books.map((book)=>(
                    <div className="book" key={book.id}>
                        <h1>{book.name}</h1>
                    </div>
                ))}
            </div>
        );
}

export default graphql(getBooksQuery)(BookList);
