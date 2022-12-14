import React, { useState } from 'react'

export const Filters = ({data}) => {
  const [showData,setShowData] = useState(data);
  return (
    <>
      <div className='filter'>
        <h2>Filter-Holder</h2><br />
        <div id='gender_Filter'>
          <h2>Gender</h2>
          
          <input type="radio" name="gender" id="men" checked
          // value="M"
          // onClick={() => {
          //   setShowData({ ...showData, gender: "M" });
          // }}
          // checked={showData["gender"] === "M"}
          />
          <label htmlFor="men">MEN</label> <br />
          <input type="radio" name="gender" id="women" 
          // value="F"
          // onClick={() => {
          //   setShowData({ ...showData, gender: "F" });
          // }}
          // checked={showData["gender"] === "F"}
          />
          <label htmlFor="women">WOMEN</label>
          
        </div>
        <br />
        <div id='categories'>
          <h2>Categories</h2>
          
          <input type="checkbox" name="white" id="white" 
          style={{ display: "inline" }}
          onClick={() => {
           setShowData({
              ...showData,
              white: showData.white ? false : true,
            });
          }}
          />
          <label htmlFor="white">White</label><br />
          <input type="checkbox" name="foldedSleeves" id="foldedSleeves" 
          style={{ display: "inline" }}
          onClick={() => {
           setShowData({
              ...showData,
              folded: showData.folded ? false : true,
            });
          }}
          />
          <label htmlFor="foldedSleeves">Folded Sleeves</label>
          
        </div>
      </div>
    </>
  )
}

