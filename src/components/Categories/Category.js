import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Category.css';
import { selectCategories, checkStatus } from '../../redux/categories/categories';

const Category = () => {
  const Status = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button className="category-btn" type="button" onClick={handleClick}>
        Check Status
      </button>
      <h1>{Status}</h1>
    </div>
  );
};

export default Category;
