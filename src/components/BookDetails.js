import React, { Component } from 'react';
import {graphql} from "react-apollo";
import {getBookQuery} from "../queries/queries";

export class BookDetails extends Component {

    render() {
        return (
            <div id="bookDetails">
                <p>{this.props.bookid}</p>
            </div>
        )
    }
}

export default graphql(getBookQuery)(BookDetails);
