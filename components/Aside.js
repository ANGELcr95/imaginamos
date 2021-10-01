import React from 'react';
import {AmountFood, AmountImg} from './StyledComponents';


const Aside = () => {
    return (
        <div className="Aside" >
          <div className="row d-flex justify-content-center align-items-center " >
              <div className="CountOrder col-5 col-lg-10 justify-content-md-end">
                  <img src="icons/747376.svg" alt="" />
                  <div className="NumberOrder">
                      <b>3</b>
              </div>
            </div>

            <div className="Count align-items-center col-5 col-lg-10 justify-content-lg-start ">
              <h4>My <img src="img/emoticon.png" alt="" /> </h4>
              <h4>Order</h4>
            </div>
          </div>
          <div className="col- d-flex justify-content-center">
          <div className="AsideTime col-10 row d-flex align-items-center">
                <div className="AsideTimeEdit col- d-flex justify-content-between">
                  <p>625 St Marks Ave</p>
                  <p>Edit</p>
                </div>
                <div className="AsideTimeChoose col- d-flex  justify-content-between">
                    <div className="d-flex justify-content-between">
                      <div className="AsideTimeChooseImg "> 
                        <img src="icons/149316.svg" alt="" />
                      </div>
                      <p>35 min</p>    
                    </div>
                    <div className=" ">
                      <p>Choose time</p>
                    </div>
                </div>
            </div>
            </div>
            {/* <div className="AmountFood ">
                <AmountFood>
                      <img src="img/pexels-photo-376464.jpeg" alt="" />
                      <b>1 x</b><p> Beach <br/> BBQBurger </p>
                      <p>$14.99</p>
                </AmountFood>
            </div> */}

            
        </div>
    );
};

export default Aside;