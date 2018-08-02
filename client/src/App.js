import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo";
//component 
import BookList from './component/BookList'
import AddBook from './component/AddBook'


const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
      <div className="App">
        <h1>Ninja Reading List</h1>
        <BookList/>
        <AddBook/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
