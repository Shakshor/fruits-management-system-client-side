import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails';


const ItemDetails = () => {
    const { itemId } = useParams();
    // using custom hook
    const [item, setItem] = useItemDetails(itemId);
    const { name, img, description, price, quantity } = item;




    return (
        <div className='item-details-area container'>
            <h2>About To Book{itemId}</h2>
            <div className='item-details'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button className='btn btn-primary'>Delivered</button>
            </div>


            <div className='m-5'>
                <Link to='/manage'>
                    <button className='btn btn-primary'>Manage Inventories</button>
                </Link>
            </div>
           
        </div>
    );
};

export default ItemDetails;