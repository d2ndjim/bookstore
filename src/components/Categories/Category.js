import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, checkStatus } from '../../redux/categories/categories';

const Category = () => {
  const Status = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories">
      <button
        className="primary-button"
        type="button"
        onClick={handleClick}
      >
        CHECK STATUS
      </button>
      <p>{Status}</p>
    </div>
  );
};

export default Category;
