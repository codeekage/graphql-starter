import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo";
//component 
import BookList from './component/BookList'


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
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
