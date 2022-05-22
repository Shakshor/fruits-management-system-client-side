import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bg1 from '../../../images/banner/banner2.jpg';
import bg2 from '../../../images/banner/banner1.jpg';
import bg3 from '../../../images/banner/banner3.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='banner-area' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={bg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>A Healthy Outside Starts From Thee Inside</h3>
                    <p>Detoxifies, Prevails inflammation and improves circulation.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={bg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Let Your Food Be Your Medicine.</h3>
                    <p>Improves immune system function and eye health and reduce risk of heart disease.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src={bg3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Keep Calm And Eat More Fruits And Veggies</h3>
                    <p>Improves memory function and reduces free radical damage.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;