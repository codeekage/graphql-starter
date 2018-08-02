import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql } from 'react-apollo'


const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`
class AddBooks extends Component {

    displayAuthor() {
        let data = this.props.data;
        if (data.loading) {
            return (<option>Loading Authors</option>)
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id}>{author.name}</option>

                )
            })
        }
    }

    render() {
        return (
            <div className="App">
                <form action="">
                    <div>
                        <label htmlFor="book_name">Book Name</label>
                        <input type="text" name="book_name" id=""/>
                    </div>
                    <div>
                        <label htmlFor="book_genre">Book Genre</label>
                        <input type="text" name="book_genre" id=""/>
                    </div>
                    <div>
                        <select name="" id="">
                            <option value="" selected>Select Author</option>
                            {this.displayAuthor()}
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBooks);
