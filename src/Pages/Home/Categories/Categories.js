import React from 'react';
import './Categories.css';
import cat1 from '../../../images/category/cat1.webp';

const Categories = () => {
    return (
        <div className='container me-2'>
            <h2 className='text-center text-primary fs-2 p-2 mb-4'>Top Category</h2>
            <div className="row">
                <div className='d-flex'>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src={cat1} alt="" />
                        <h5 className='ps-3 m-1'>Summer Fruits</h5>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src={cat1} alt="" />
                        <h5 className='ps-3 m-1'>Summer Fruits</h5>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src={cat1} alt="" />
                        <h5 className='ps-3 m-1'>Summer Fruits</h5>
                    </div>
                    <div className="col-md-3">
                        <img className='img-fluid rounded-circle' src={cat1} alt="" />
                        <h5 className='ps-3 m-1'>Summer Fruits</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;