import React from 'react';
import useItems from '../../hooks/useItems';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css';

const Inventory = () => {
    // custom hook
    const [items, setItems] = useItems();

    return (
        <div className='container'>
            <h2>Inventory Page: {items.length}</h2>
            <div className='items-area'>
                {
                    items.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>)
                }
            </div>
        </div>
    );
};

export default Inventory;