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
            age
        }
    }

`



const Addbook = ({data}) => {
    console.log(data.authors);

    return(
        <div>

        </div>
    );
}

export default graphql(getAuthorsQuery)(Addbook);
