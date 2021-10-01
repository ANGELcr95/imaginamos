import React from 'react';

const Banner = () => {
    return (
        <div className="Banner">
                <div className="imgBanner">
                    <img src="img/headerimage.png" alt=""/>
                </div>
                <div className="InfoBanner">
                    <div className="InfoBannerUp">
                        <h4>$0 delivery for 30 days!</h4>
                        <img src="img/d.png" alt="logo"/>
                    </div>
                    <p>$0 delivery fee for orders over $10 for 30 days</p>
                </div>
                <div className="LearnBanner">
                    <p>Learn More <img src="icons/109617.svg" alt="" /></p>
                    
                </div>
        </div>
    );
};

export default Banner;