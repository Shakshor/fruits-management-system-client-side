import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import InventoryItem from '../../InventoryItem/InventoryItem';
import './Home.css';

const Home = () => {
    const [items, setItems] = useItems();
    const newItems = items.slice(0, 6);
    const navigate = useNavigate();

    return (
        <div>
            <h2 className='text-center'>Welcome To Fruit Management System</h2>
            <h2 className='text-center'>Home Page</h2>
            <section className='container'>
                <h2>Items</h2>
                <div className='items-area'>
                    {
                        newItems.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>)
                    }
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary m-5 p-2 w-25' onClick={() => navigate('/inventory')}>See All Items</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
