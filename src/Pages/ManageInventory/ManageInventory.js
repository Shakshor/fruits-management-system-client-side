import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import AllInventoryItems from '../AllInventoryItems/AllInventoryItems';
import './ManageInventory.css';


const ManageInventory = () => {
    // custom hook
    const [items, setItems] = useItems();
    const navigate = useNavigate();

    return (
        <div className='container'>
            <h2 className=' text-primary text-center'>Inventory: {items.length}</h2>
            <div className='items-area'>
                {
                    items.map(item => <AllInventoryItems key={item._id} item={item}></AllInventoryItems>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-primary m-5 p-2 w-25' onClick={() => navigate('/addItem')}>Add Item</button>
            </div>
        </div>
    );
};

export default ManageInventory;