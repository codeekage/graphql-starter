import React, { Component } from 'react';
import {compose, graphql } from 'react-apollo'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../query";

class AddBooks extends Component {

    constructor(props){
        super(props);

        this.state ={
            name: "",
            genre: "",
            authorId: ""
        }
    }

    displayAuthor() {
        let data = this.props.getAuthorsQuery;
        if (data.loading) {
            return (<option>Loading Authors</option>)
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>

                )
            })
        }
    }

    submitForm(e){
        e.preventDefault();
        this.props.addBookMutation({
            variables:this.state,
            refetchQueries: [{
                query: getBooksQuery
            }]
        });
        console.log(this.state);

    }

    render() {
        return (
            <div className="App">
                <form action="" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                        <label htmlFor="book_name">Book Name</label>
                        <input type="text" name="book_name" id="" onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label htmlFor="book_genre">Book Genre</label>
                        <input type="text" name="book_genre" id="" onChange={(e) => this.setState({ genre: e.target.value })}/>
                    </div>
                    <div className="field">
                        <select name="" id="" onChange={(e) => this.setState({ authorId: e.target.value })}>
                            <option value="" defaultValue>Select Author</option>
                            {this.displayAuthor()}
                        </select>
                    </div>

                    <button type="submit">+</button>
                </form>
            </div>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, { name: "addBookMutation"}),
)(AddBooks);
