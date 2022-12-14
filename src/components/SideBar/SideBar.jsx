import React from 'react'
import './SideBar.css';

export const SideBar = ({data}) => {
  // const [showData, setShowData] = useState(data);
  return (
    <div className='filter-holder'>
        <div className='filters'>
            <h5 className='filter-heading'>Gender</h5>
            <label><input type="radio" className='filter_option'
              // value="M"
              // onClick={() => {
              //   setShowData({ ...showData, gender: "M"});
              // }}
              // checked={showData["gender"] === "M"}
            
            /> Men</label>
            <label><input type="radio" className='filter_option' /> Women</label>
        </div>

        <div className='categories'>
            <h5 className='filter-heading'>Categories</h5>
            <label><input type="checkbox" className='filter_option' /> White</label>
            <label><input type="checkbox" className='filter_option' /> Folded sleeves</label>
        </div>
    </div>
  )
}