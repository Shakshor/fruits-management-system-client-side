import React from 'react';
import './SuperSales.css';
import img from '../../../images/sales/sales.avif';

const SuperSales = () => {
    return (
        <section >
            <h2 className='fs-1 text-center text-primary m-2'>Super Offer</h2>
            <div className='sales-area mb-5'>

                <div className="sales-details">
                    <h1 className='text-primary'>Summer Season<br></br>Fresh Organic Fruits</h1>
                    <p>UpTo 25% Off</p>
                    <button className='btn btn-primary'>Shop Now</button>
                </div>
                <div className="sales-pic">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SuperSales;