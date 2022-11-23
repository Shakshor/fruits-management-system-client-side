import React from 'react';
import useItems from '../../hooks/useItems';
import './ManageItems.css';

const ManageItems = () => {
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://fruits-mangament-server.onrender.com/item/${id}`;
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
        <div className='w-50 mx-auto'>
            <h2 className='ms-3 text-primary'>Manage Items</h2>
            {
                items.map(item => <div key={item._id} className='manage-items'>
                    <h5>{item?.name} {item?.Name}  <button className='btn btn-primary ms-3' onClick={() => handleDelete(item._id)}>Delete</button></h5>

                </div>)
            }
        </div>
    );
};

export default ManageItems;