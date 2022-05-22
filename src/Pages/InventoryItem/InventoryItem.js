import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({ item }) => {
    const { _id, name, img, description, price, quantity } = item;
    const navigate = useNavigate();

    const navigateToItemDetails = id => {
        navigate(`inventoryItem/${id}`);
    }

    return (
        <div className='selected-item'>
            <img className='img-fluid' src={img} />
            <div className='selected-item-details'>
                <h4>{name}</h4>
                <p><small>{description}</small></p>
                <p>Price: {price}</p>
                <button className=' btn btn-primary mb-3 w-75' onClick={() => navigateToItemDetails(_id)}>Update</button>
            </div>

        </div>
    );
};

export default InventoryItem;