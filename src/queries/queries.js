import {gql} from "apollo-boost";


const getAuthorsQuery = gql`

    {
        authors{
            name,
            age,
            id
        }
    }

`

const getBooksQuery = gql`

    {
        books{
            name,
            id
        }
    }

`

const getBookQuery = gql`

   query($id: ID) {
       book(id: $id){
           id
           name
           genre
           author{
               id
               name
               age
               books{
                   name
                   id
               }
           }
       }
   }

`

const addBookMutation = gql`

    mutation($name: String!, $genre: String!, $authorid: ID!) {
        addBook(name: $name, genre: $genre, authorid: $authorid) {
            name,
            id
        }
    }
`

export {getAuthorsQuery, getBooksQuery, getBookQuery, addBookMutation};
