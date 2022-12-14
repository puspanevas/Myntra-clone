import React, { useState } from 'react'
import {Content} from './Content';
import data from '../data';
import './Shirts.css';
import {Sorting} from './Sorting';



export const Shirts = () => {
  const [Data,setData] = useState(data);
  
  return (
    <div className='mane'>
        <div>
          <Sorting />
        </div>
        <div>
          <Content Data={Data}/>
        </div>

        
    </div>
  )
}
