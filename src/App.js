import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import "./App.css";


//Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';


/**
 * Apollo Client setup
 */
const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});


export default class App extends Component {
  render() {
    return (

      <ApolloProvider client={apolloClient}>
        <div className="App">
          <h1 className="heading">Chaitu's Reading list</h1>
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>

    )
  }
}
