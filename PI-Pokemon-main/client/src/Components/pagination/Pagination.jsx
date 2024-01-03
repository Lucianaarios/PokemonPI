import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';
import './Pagination.css';

const Pagination = ({ totalItems }) => {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="buttonContainer">
      {renderPageButtons()}
    </div>
  );
};

export default Pagination;