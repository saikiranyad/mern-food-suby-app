import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext';

const Fooditem = ({id,name,price,description,image}) => {

    const {cartItems,addtocart,removeitem,url} = useContext(StoreContext);
    console.log(url+"/images"+image)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img  className="food-item-img" src={url+"/images/"+image} alt="" />
            {
                !cartItems[id]?<img src={assets.add_icon_white} onClick={()=>addtocart(id)} alt="" className="add" />
                :<div className='food-item-counter'>
                    <img className='img' onClick={()=>removeitem(id)} src={assets.remove_icon_red} alt="" />
                    {cartItems[id]}
                    <img className='img' src={assets.add_icon_green} onClick={()=>addtocart(id)} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default Fooditem
