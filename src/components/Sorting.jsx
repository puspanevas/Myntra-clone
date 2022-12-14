import React from 'react'
import './Sorting.css';

export const Sorting = () => {
  return (
    <div className='sort-holder d-flex'>
      <label for="sort">Sorting: </label>
      <select name="sort" id="sort">
        <option value="What's New">What's New</option>
        <option value="Price low to high">Price low to high</option>
        <option value="Better Discount">Better Discount</option>
      </select>
    </div>
  )
}

