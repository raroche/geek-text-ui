import React, { Component } from "react";
import Book from "../Book/Book";
import Pagination from "../Pagination/Pagination";
import './BookSection.css';

class BookSection extends Component {

  constructor(props) {
    super(props);
    

   
    
}

render() {
  var total = 25;
  return (
    
    <div>
        <div className="scroll" >
          {this.props.data.map(book => book.id != undefined ? <Book book={book} key={book.id}/>: undefined )}
        </div>
        <div className = "center1">
        <Pagination total={total} pageNo = {this.props.pageNo} url = {this.props.url}/>
        </div>
        
    
      <hr />
                
   </div>
        
        
        
    
  );
}
}
  
  export default BookSection;


