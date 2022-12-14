import React from 'react'
import './Content.css';

export const Content = ({Data}) => {
  console.log(Data);
  return (
    <div className='product-tile-holder'>
      {
        Data.map((value) => {
          return(
            <>
              <div className='indiv-title-holder' key={value.id}>
                <img src={value.otherImages[0]}   alt="" />
                <h3>{value.name}</h3>
                <b><em><p>{value.description}</p></em></b>
                <b><p>{value.finalPrice}  <del>  {value.strickPrice}</del> <em><span style={{color:'red'}}>{value.discount}% OFF</span></em> </p></b>
              </div>
    
            </>
          )
        })
      }
      </div>
  )
}
