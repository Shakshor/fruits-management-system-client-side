import React from 'react';
import useItems from '../../hooks/useItems';
import InventoryItem from '../InventoryItem/InventoryItem';
import './ManageInventory.css';


const ManageInventory = () => {
    // custom hook
    const [items, setItems] = useItems();

    return (
        <div className='container'>
            <h2>Inventory Page: {items.length}</h2>
            <div className='items-area'>
                {
                    items.map(item => <InventoryItem key={item._id} item={item}>
                        <button></button>
                    </InventoryItem>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;