import React from 'react';
import pic from '../../images/pic.png'
const OurServices = () => {
    return (
        <div className='container'>
            
            <div className="row">
                <div className="col-md-6">
                  <div className="py-5">
                      <img className=" img-fluid" src={pic} alt=""/>
                  </div>
              </div>
                  <div className="col-md-6">
                      <div className="pe-3 d-flex flex-column justify-content-center h-100">
                        <h1 className=" fw-bold ">Our services for you</h1>
                          <p className="fs-5 text-muted">We have gained many reputations here and abroad. In our warehouse we do all these different domestic and foreign products. any one can come with us. A trousty wareHouse is D-Warehouse</p>
                            
                      </div>
                  </div>
                  
              </div>
        </div>
    );
};

export default OurServices;