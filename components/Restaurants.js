import React from 'react';
import { ProductStyle, DivProduct,ImgProduct, PProduct, DivImgFood,DivTimeFood,DivFoodName} from './StyledComponents';

function Restaurants(props) {
    return (
        <div className="Restaurants">
            <div className="Titule">
                <h3>Restaurants <img src="icons/1046784.svg" alt="" /></h3>
                <button>
                    <img src="icons/149316.svg" alt="" /><span>Delivery:<b>Now</b></span><img  src="icons/118740.svg" alt="" />
                </button>
            </div>
            <div className="Products">
                <div className="ProductsImg">
                    <ProductStyle>
                        <DivProduct>
                            <ImgProduct src="icons/701965.svg" alt="" />
                        </DivProduct>
                        <PProduct>All</PProduct>
                    </ProductStyle>

                    <ProductStyle>
                        <DivProduct>
                            <ImgProduct src="icons/599995.svg" alt="" />
                        </DivProduct>
                        <PProduct>Pizza</PProduct>
                    </ProductStyle>

                    <ProductStyle>
                        <DivProduct>
                            <ImgProduct src="icons/1900683.svg" alt="" />
                        </DivProduct>
                        <PProduct>Asian</PProduct>
                    </ProductStyle>

                    <ProductStyle>
                        <DivProduct>
                            <ImgProduct src="icons/883806.svg" alt="" />
                        </DivProduct>
                        <PProduct>Burgers</PProduct>
                    </ProductStyle>
                    <ProductStyle>
                        <DivProduct>
                            <ImgProduct src="icons/174394.svg" alt="" />
                        </DivProduct>
                        <PProduct>Barbecue</PProduct>
                    </ProductStyle>

                    <ProductStyle>
                        <DivProduct>
                            <ImgProduct src="icons/135367.svg" alt="" />
                        </DivProduct>
                        <PProduct>Dessers</PProduct>
                    </ProductStyle>

                    <ProductStyle>
                        <DivProduct>
                            <ImgProduct src="icons/1900683.svg" alt="" />
                        </DivProduct>
                        <PProduct>Thai</PProduct>
                    </ProductStyle>
                    <ProductStyle>
                        <DivProduct>
                            <ImgProduct src="icons/599995.svg" alt="" />
                        </DivProduct>
                        <PProduct>Shushi</PProduct>
                    </ProductStyle>
                    </div>
                <div className="ProductsArrow">
                    <img  src="icons/118740.svg" alt="" />
                </div>
            </div>
            <div className="Food">
                <DivImgFood>
                    <img  src="img/pexels-photo-156114.jpeg" alt="" />
                    <DivTimeFood>
                    <p><b>25-30</b> min</p>
                </DivTimeFood>
                </DivImgFood>
                
                <DivImgFood>
                    <img  src="img/pexels-photo-461198.jpeg" alt="" />
                    <DivTimeFood>
                    <p><b>30-35</b> min</p>
                </DivTimeFood>
                </DivImgFood>
                
                <DivImgFood>
                    <img  src="img/pexels-photo-675951.jpeg" alt="" />
                    <DivTimeFood>
                    <p><b>40-60</b> min</p>
                </DivTimeFood>
                </DivImgFood>
            </div>
            <div className="FoodName">
                <DivFoodName>
                    <b>Bagel Story</b>
                    <p><img src="icons/149220.svg" alt="" /><b> 4.6 </b> Deli Bagets</p> 
                </DivFoodName>
                
                <DivFoodName>
                    <b>The Estaminet</b> 
                    <p><img src="icons/149220.svg" alt="" /><b> 4.6 </b>Cafes Creperies</p> 
                </DivFoodName>
                
                <DivFoodName>
                    <b>Le Paris Dakar</b>
                    <p><img src="icons/149220.svg" alt="" /><b> 4.6 </b>Creperies Sandwich</p> 
                </DivFoodName>
            </div>
          
        </div>
    );
}

export default Restaurants;