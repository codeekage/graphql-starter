import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBookQuery } from "../query";
class BooksDetails extends Component {
    displayBookDetails(){
        const {book} = this.props.data;
        if(book){
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <ul>
                        {
                            book.author.books.map(item => {
                                return(
                                    <li key={item.id}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }else{
            return(
                <div>No Book Selected</div>
            )
        }
    }

    render() {  
        return (
            <div className="App" id="book-details">
                <h5>Book Details</h5>
                <div>
                   <p>Output Details</p>
                   {this.displayBookDetails()}
                </div>
            </div>
        );
    }
}

export default graphql(getBookQuery, {
    options : (props) => {
       return{
         variables: {
             id : props.bookid
         }
       }
    }
})(BooksDetails);
