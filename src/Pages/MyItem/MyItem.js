import React, { useState } from 'react';

const MyItem = ({ item }) => {
    const [myItems, setMyItems] = useState([]);
    console.log(item);
    const { _id, Name, Description, price, img } = item;


    // delete the item
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://fruits-management-server.herokuapp.com/myItem/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItem = myItems.filter(item => item._id !== id);
                    setMyItems(remainingItem);
                })
        }
    }


    return (
        <div className='selected-item'>
            <img src={img} />
            <div className='selected-item-details'>
                <h4>{Name}</h4>
                <p><small>{Description}</small></p>
                <p>Price: {price}</p>
                <button className='btn btn-primary mb-3 w-75' onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default MyItem;