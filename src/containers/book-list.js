import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render (){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}

function mapStateToProps(state){
  // Whatever gets returned from here will show up as props for BookList
  // Usually that will be an object
  return {
    books: state.books
  };
}

//connect takes a function and a containers
// a container is a react Component that is aware of our state via redux
export default connect(mapStateToProps)(BookList)
