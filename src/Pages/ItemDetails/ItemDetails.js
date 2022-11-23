import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useItemDetails from '../../hooks/useItemDetails';


const ItemDetails = () => {
    const { itemId } = useParams();
    const [input, setInput] = useState('');
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://fruits-mangament-server.onrender.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [item]);
    // console.log(item);

    const decreaseQuantity = id => {
        let quantity = item.quantity;
        // console.log(quantity);
        quantity -= 1;
        // console.log(quantity);
        const updatedDetail = { quantity };
        // console.log(updatedDetail);
        fetch(`https://fruits-mangament-server.onrender.com/item/${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedDetail),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    const increaseQuantity = (id) => {
        let quantity = item.quantity;
        let num = parseInt(input);
        // console.log(quantity);
        // console.log(input);
        quantity += num;
        quantity = parseInt(quantity);
        // console.log(quantity);
        const updatedDetail = { quantity };
        console.log(updatedDetail);
        fetch(`https://fruits-mangament-server.onrender.com/item/${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedDetail),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div className='item-details-area container'>
            <h2>About To Book{itemId}</h2>
            <div className='item-details'>
                <img src={item.img} alt="" />
                <h2>{item.name}</h2>
                <p>price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => decreaseQuantity(itemId)} className='btn btn-primary'>Delivered</button>
                <br></br>
                <input className='my-3' value={input} onInput={e => { setInput(e.target.value); }} type="text" name='text' autoComplete='off' placeholder='Restock The Item' />
                <button disabled={!input} onClick={() => increaseQuantity(itemId)} className='btn btn-primary ms-4'>Add to Stock</button>

            </div>


            <div className='m-5'>
                <Link to='/manage'>
                    <button className='btn btn-primary'>Manage Inventories</button>
                </Link>
            </div>

        </div >
    );
};

export default ItemDetails;