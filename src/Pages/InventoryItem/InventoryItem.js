import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({ item }) => {
    const { _id, name, img, description, price, quantity } = item;
    const navigate = useNavigate();
    // const itemId = useParams();

    const navigateToItemDetails = id => {
        navigate(`inventoryItem/${id}`);
    }

    return (
        <div className='selected-item'>
            <img src={img} />
            <h4>{name}</h4>
            <p><small>{description}</small></p>
            <p>Price: {price}</p>
            <button className='btn btn-primary' onClick={() => navigateToItemDetails(_id)}>Update</button>
        </div>
    );
};

export default InventoryItem;