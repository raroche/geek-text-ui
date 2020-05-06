import React, { Component } from "react";
import Book from "../Book/Book";
import Pagination from "../Pagination/Pagination";
import './BookSection.css';

class BookSection extends Component {

  constructor(props) {
    super(props);
    

   
    
}

render() {
  return (
    
    <div>
        <div className="scroll" >
          {this.props.data.map(book => this.props.data ? <Book book={book} key={book.id}/>: undefined )}
        </div>
          <Pagination total={this.props.total} pageNo = {this.props.pageNo} url = {this.props.url}/>
        
    
      <hr />
                
   </div>
        
        
        
    
  );
}
}
  
  export default BookSection;


