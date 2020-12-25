import React from "react";
import {graphql} from "react-apollo";
import {getAuthorsQuery} from "../queries/queries";





const Addbook = ({data}) => {

    const {authors} = data;

    const displayAuthors = ()=>{
        if(data.loading)
            return null;

        else if (data.error)
            return <p>Unable to load authors</p>

        else
        {
            return(
                authors.map((author)=>(
                    <option key={author.id}>{author.name}</option>
                ))
            );
        }
    }


    return(
        <div className="addBook">
            
            <div className="field">
                <label>Book name:</label>
                <input type="text" name="bookname"/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" name="bookname"/>
            </div>

            <div className="field">
                <label>Author name:</label>
                <select>
                    <option>Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button className="btn">+</button>
        </div>
    );
}

export default graphql(getAuthorsQuery)(Addbook);
