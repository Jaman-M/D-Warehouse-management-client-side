import React from 'react';
import addresspic from '../../images/Address.png'

const OurAddress = () => {
    return (
        <div className='container'>
            <h1 className=" className='text-primary text-center mt-5 mb-2 ">Our wareHouse Address</h1>
            
            <div className="row">
                
                  <div className="col-md-6">
                      <div className="pe-3 d-flex flex-column justify-content-center h-100">
                        
                          <p className="fs-5 text-muted">
                              <li><i>Office of Deputy Commissioner xyz · Export Assessment Section, Customs (1st floor) · Export Village · Office of Assistant Commissioner, Dhaka</i></li>
                              <li><i>Address: 8Q6X+QGR, Port Colony Road, Chattogram 4100</i></li>
                              <li>Address: bangla banda , number2 gate| 1/b 1800</li>
                              <li><i>Hili port: 4y= Gate-1| mob:01500000</i></li>
                          </p>
                            
                      </div>
                  </div>
                  <div className="col-md-6">
                  <div className="py-5">
                      <img className=" img-fluid" src={addresspic} alt=""/>
                  </div>
              </div>
                  
              </div>
        </div>
    );
};

export default OurAddress;