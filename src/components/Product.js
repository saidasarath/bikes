import React from 'react';
import { useParams } from 'react-router-dom';
import { bikesData } from '../components/bikesData';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/product.css";
import Footer1 from '../components/Footer1'
const Product = () => {
    const { id } = useParams();
    const product = bikesData.find(bike => bike.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,             // Enable autoplay
        autoplaySpeed: 3000,        // Set autoplay speed (3000ms = 3s)
        arrows: true                // Enable manual control

    };

    return (
        <div>
            <Navbar />
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <Slider {...sliderSettings}>
                                {product.img.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`${product.name} ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="right">
                            <span className="name">{product.name}</span>
                            <span className="desc">{product.des}</span>
                            <div className="cart-buttons">
                                <button className="add-to-cart-button">
                                    Explore more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-product'>
            <Footer1/>
            </div>
            
        </div>
    );
};

export default Product;
