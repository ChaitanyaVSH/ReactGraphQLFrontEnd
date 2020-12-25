import React, { Component } from 'react'
import {graphql} from "react-apollo";
import {getAuthorsQuery} from "../queries/queries";




export class AddBook extends Component {

    displayAuthors = ()=>{
        const data = this.props.data;
        console.log(data);
        if(data.loading)
            return null;

        else if (data.error)
            return <p>Unable to load authors</p>

        else
        {
            return(
                data.authors.map((author)=>(
                    <option key={author.id}>{author.name}</option>
                ))
            );
        }
    }

    render() {
        return (
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
                    {this.displayAuthors()}
                </select>
            </div>
            <button className="btn">+</button>
        </div>
        )
    }
}

export default graphql(getAuthorsQuery)(AddBook);
