import React from 'react';
import PropTypes from 'prop-types';
import Book from "../Book/Book";

import "./Pagination.css"

const propTypes = {
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

const defaultProps = {
    initialPage: 1,
    pageSize: 10
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    render() {
        //var pager = this.state.pager;
        var page = parseInt(this.props.pageNo);


        return (
            <div className = "center2">
                <ul className="pagination">
                    <li className={page === 1 ? 'disabled' : ''}>
                        {page === 1
                        ? <a>First</a>
                        : <a href={`${this.props.url}1`}>First</a>
                        }   
                    </li>
                    <li className={page === 1 ? 'disabled' : ''}>
                        {page === 1
                        ? <a>Previous</a>
                        : <a href={`${this.props.url}${page-1}`}>Previous</a>
                        }
                    </li>
                    
                    <li className={page === page ? 'active' : ''}>
                        <a> {this.props.pageNo}</a>
                    </li>
                    
                    <li className={page === this.props.total? 'disabled' : ''}>
                        {page === this.props.total
                        ? <a>Next</a>
                        : <a href={`${this.props.url}${page+1}`}>Next</a>
                        }
                    </li>
                    <li className={page === this.props.total ? 'disabled' : ''}>
                        {page === this.props.total
                        ? <a>Last</a>
                        : <a href={`${this.props.url}${this.props.total}`}>Last</a>
                        }
                    </li>
                </ul>
            </div>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;