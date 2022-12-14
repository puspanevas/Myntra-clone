import React, { useState } from 'react';
import './SearchBar.css';
import data from '../../data';

export const SearchBar = () => {
    const [searchStr, setSearchStr] = useState("");
    const [updateShirtList,setUpdateShirtList] = useState();
    const [showData, setShowData] = useState(data);
    console.log(showData);
    const clothData = (gender) =>{
        const dataList = showData.filter((value) =>{
            return value.gender === gender;
        })
        setShowData(dataList);
    }
    console.log(clothData)

    return( 
        <div id='product-title-holder'>
        <input type="text" placeholder='Search Your Product her' className='nav-searchbar'
                value={searchStr}
                onChange={(e) => setSearchStr(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                    setUpdateShirtList({ ...updateShirtList, searchStr: searchStr });
                }
                }}
        />
    </div>
    )
}



