import React from 'react';
import './SuperSales.css';
import img from '../../../images/sales/sales.avif';

const SuperSales = () => {
    return (
        <section className='sales-area'>
            <div className="sales-details">
                <h1 className='text-primary'>Summer Season<br></br>Fresh Organic Fruits</h1>
                <p>UpTo 25% Off</p>
                <button className='btn btn-primary'>Shop Now</button>
            </div>
            <div className="sales-pic">
                <img src={img} alt="" />
            </div>
        </section>
    );
};

export default SuperSales;