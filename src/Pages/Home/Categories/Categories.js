import React from 'react';
import './Categories.css';
import cat1 from '../../../images/category/cat1.webp';
import cat2 from '../../../images/category/cat2.webp';
import cat3 from '../../../images/category/cat3.webp';
import cat4 from '../../../images/category/cat4.webp';

const Categories = () => {
    return (
        <div className='container me-2'>
            <h2 className='text-center text-primary fs-2 p-3 m-4'>Top Category</h2>
            <div className="row">
                <div className='d-flex'>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src={cat1} alt="" />
                        <h5 className='ps-3 m-1'>Summer Fruits</h5>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src={cat2} alt="" />
                        <h5 className='ps-3 m-1'>Dry Fruits</h5>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src={cat3} alt="" />
                        <h5 className='ps-3 m-1'>Exotic Fruits</h5>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src={cat4} alt="" />
                        <h5 className='ps-3 m-1'>Fresh Fruits</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;