import React from "react";
import {gql} from "apollo-boost";
import {graphql} from "react-apollo";


/**
 * GraphQL Queries to fetch the data from the mlab
 */
const getAuthorsQuery = gql`

    {
        authors{
            name,
            age,
            id
        }
    }

`



const Addbook = ({data}) => {

    const {authors} = data;

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
                    {authors.map((author)=>(
                        <option>{author.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default graphql(getAuthorsQuery)(Addbook);
