import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import InventoryItem from '../../InventoryItem/InventoryItem';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import SuperSales from '../SuperSales/SuperSales';
import './Home.css';

const Home = () => {
    const [items, setItems] = useItems();
    const newItems = items.slice(0, 6);
    const navigate = useNavigate();

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <section className='container p-4'>
                <h2 className='text-primary text-center m-4 fs-1 ps-5'>Products</h2>
                <div className='items-area'>
                    {
                        newItems.map(item => <InventoryItem key={item._id} item={item}></InventoryItem>)
                    }
                </div>
                <div className='text-center manage-inventory'>
                    <button className='btn btn-primary m-4 m-lg-5 p-lg-2 see-all-btn' onClick={() => navigate('/manage')}>Manage Inventory</button>
                </div>
            </section>
            <SuperSales></SuperSales>
        </div>
    );
};

export default Home;
