import React from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const ItemDetails = () => {
    const { itemId } = useParams();
    // using custom hook
    // const [items, setItems] = useItems();


    return (
        <div>
            <h2>Item Details Page..{itemId}</h2>
        </div>
    );
};

export default ItemDetails;