import React, {useState} from "react";
import {graphql} from "react-apollo";
import {getBooksQuery} from "../queries/queries";
import BookDetails from "./BookDetails";


const BookList = ({data}) => {

    const {loading, error, books } = data;

    const [currentBookId , setCurrentBookId] = useState("")

    const clickHandler = (bookId, ...params)=>{
        setCurrentBookId(bookId)
    }

    if(loading)
        return <h1>Fetching the data...</h1>


    else if(error)
        return <h1>Error while fetching the data...</h1>

    else
        return(
            <div className="bookWrapper">
            <div className="bookList">
                {books.map((book)=>(

                    // This is the OLDER way of passing the value to any handlers declared above.
                    // More at: https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method?page=1&tab=votes#tab-top
                    // return (
                    //     <th value={column} onClick={this.handleSort.bind(this, column)}>{column}</th>
                    //   );

                    // This is the NEWER way of passing the values to any handlers declared above.
                    // More at: ABOVE LINK
                    // return (
                    //     <th value={column} onClick={() => this.handleSort(column)}>{column}</th>
                    //   );


                    // This is the CLEANER way of calling hadlers by passing values if we have the less business logic around it.
                    // <div className="book" key={book.id} onClick={()=>{setCurrentBookId(book.id)}}>
                    //     <h1>{book.name}</h1>
                    // </div>


                    <div className="book" key={book.id} onClick={()=>clickHandler(book.id, book.name, book.id)}>
                        <h1>{book.name}</h1>
                    </div>
                ))}
                {/* <BookDetails bookid={currentBookId}/> */}
            </div>
            <BookDetails bookid={currentBookId}/>
            </div>

        );
}

export default graphql(getBooksQuery)(BookList);
