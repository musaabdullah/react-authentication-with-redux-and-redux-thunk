import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../actions/user";
import Navbar from "../components/NavBar";
import { getProducts } from "../actions/products";
import Form from "../components/Form";
function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.product);
   
  console.log(products);
    
  useEffect(() => {
       
    dispatch(getProducts());
     
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row  ">
            <div className="col-md-4">
                <Form />
            </div>
          <div className="col-md-8">
              <div className="row">

            {products && 
                products.map((item) => {
                    return <div className="col-md-4 card m-3" style={{width: "320px"}}>
                    
                            <img src={item.image} style={{width: "300px", height: "200px"}}/>
                            <div className="card-body">
                                <div className="card-title">
                                    {item.name}
                                </div>
                                <div className="card-text">
                                    {item.price}
                                </div>
                            </div>
                    </div>
                })
            }
         </div>
      </div>
            </div>
            </div>
    </div>
  );
}

export default Home;
