import React, { Component } from 'react'
import {graphql} from "react-apollo";
//https://stackoverflow.com/a/57466996
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery, addBookMutation} from "../queries/queries";

export class AddBook extends Component {

    state= {
        bookname: "",
        genre: "",
        authorid: ""
    }

    displayAuthors = () => {

        const data = this.props.getAuthorsQuery;

        if(data.loading)
            return null;

        else if (data.error)
            return <p>Unable to load authors</p>

        else
        {
            return(
                data.authors.map((author)=>(
                    <option key={author.id} value={author.id}>{author.name}</option>
                ))
            );
        }
    }

    changeHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    submitHandler = (event) => {

        event.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.bookname,
                genre: this.state.genre,
                authorid: this.state.authorid
            }
        })
    }

    render() {
        return (
        <div className="addBook">
            
            <div className="field">
                <label>Book name:</label>
                <input type="text" name="bookname" onChange={this.changeHandler}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" name="genre" onChange={this.changeHandler}/>
            </div>

            <div className="field">
                <label>Author name:</label>
                <select onChange={this.changeHandler} name="authorid">
                    <option>Select Author</option>
                    {this.displayAuthors()}
                </select>
            </div>
            <button className="btn" onClick={this.submitHandler}>+</button>
        </div>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
    graphql(addBookMutation, { name: "addBookMutation"})
)(AddBook);
