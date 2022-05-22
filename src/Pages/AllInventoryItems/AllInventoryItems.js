import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const AllInventoryItems = ({ item }) => {
    const { _id, name, img, description, price, quantity } = item;

    const [items, setItems] = useItems();


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItem = items.filter(item => item._id !== id);
                    setItems(remainingItem);
                })
        }
    }

    return (
        <div>
            <div className='selected-item'>
                <img src={img} />
                <div className='selected-item-details'>
                    <h4>{name}</h4>
                    <p><small>{description}</small></p>
                    <p>Price: {price}</p>
                    <button className='btn btn-primary mb-3 w-75' onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AllInventoryItems;