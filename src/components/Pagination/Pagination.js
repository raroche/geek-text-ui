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

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.pageNo && this.props.total) {
            this.setPage(this.props.pageNo);
        }
    }

    

    setPage(page) {
        var { total, pageSize } = this.props;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(total, page, pageSize);

        // update state
        this.setState({ pager: pager });

        
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        //var pager = this.state.pager;
        var page = parseInt(this.props.pageNo);
        var totalPages = Math.ceil(this.props.total / 10);

        return (
            <ul className="pagination">
                <li className={page === 1 ? 'disabled' : ''}>
                    <a href={`${this.props.url}1`}>First</a>
                </li>
                <li className={page === 1 ? 'disabled' : ''}>
                    <a href={`${this.props.url}${page-1}`}>Previous</a>
                </li>
                
                <li className={page === page ? 'active' : ''}>
                    <a> {this.props.pageNo}</a>
                </li>
                
                <li className={page === this.props.total ? 'disabled' : ''}>
                    <a href={`${this.props.url}${page+1}`}> Next</a>
                </li>
                <li className={page === this.props.total ? 'disabled' : ''}>
                    <a href={`${this.props.url}${totalPages}`}>Last</a>
                </li>
            </ul>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;