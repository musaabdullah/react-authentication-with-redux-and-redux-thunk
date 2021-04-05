import React, { useState, useEffect } from 'react'
import FileBase  from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createProduct } from '../actions/products';
function Form() {
    const [product, setProduct ] = useState({name: "", price:0, image: ""});
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(product));
        console.log(product);
    }
    return (

        <div className="card mt-3 p-2">
            <div className="card-header mb-2">
                <div className="h2">Product from</div>
            </div>
            <form>
                <div className="form-group mb-2">
                    <input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} placeholder="Name" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <input type="number" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value })} placeholder="Price" className="form-control" />
                </div>
                <div className="form-group mb-2">
                    {/* <input type="file" className="form-control" /> */}
                    <FileBase 
                     type="file"
                     multiple={false}
                     onDone = {({base64}) => setProduct({...product, image: base64})}
                     className="from-control"
                    />
                </div>
                <div className="text-center container" >
                    <button onClick={handleSubmit} className="btn btn-primary">Save</button>
                    <button className="btn btn-danger" style={{marginLeft: 10}}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Form
