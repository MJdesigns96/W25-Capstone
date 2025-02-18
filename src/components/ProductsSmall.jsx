import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductSmall (props) {
    // //render data from mongodb server and express. Transfer to a component later on.
    const [products, setProducts] = useState(props.props);

    const addToCart = (entry) => {
        let cart = {};
        console.log(entry);
        if (localStorage.getItem('cart') === null) {
            cart[entry.id] = { details: entry, qty: 1 };
            const strObj = JSON.stringify(cart);
            localStorage.setItem('cart', strObj);
        } else {
            let strObjFromStorage = localStorage.getItem('cart');
            cart = JSON.parse(strObjFromStorage);
            if (cart[entry.id] === undefined) {
                cart[entry.id] = { details: entry, qty: 1 };
            } else {
                cart[entry.id].qty++;
            }
            const strObj = JSON.stringify(cart);
            localStorage.setItem('cart', strObj);
        }
    }

    //create an object that holds the sizes of each item
    let itemSize;

    const handleSizes = (e) => {
        const { checked } = e.target;
        let size = e.target.name;
        console.log(size, checked);
    }

    let count = 0;
    // console.log(products);
    //create a list to render in react
    const productsList = products.map(entry => ( 
        <div key={entry.id} className='card col-6'>
            <Link to={`/products/all-products/${entry.id}`} style={{textDecoration: "none", color:"black"}}>
                <img src={entry.images.img1} alt="product image" loading="lazy" />
                <div className='card-body text-start'>
                    <h1 className='card-title'>{entry.name}</h1>
                    <p className='card-text'>Description Short: {entry.descriptionShort}</p>
                    <h3 className='card-text'>Price: ${entry.price}</h3>
                </div>
            </Link>
            <div className="card-footer">
                <div className='card-text'>
                    Sizes: {entry.sizes.map(size => {
                        let temp = [];
                        for(const [key,value] of Object.entries(size)) {
                            if (value && key !== "_id") {
                                temp.push(key);
                            }
                        }
                        count++;
                        return temp.map(size => 
                            (
                                <h5>
                                    {/* change type to radio and only allow 1 selection. then set the localstorage size to the selected size */}
                                    <input type="checkbox" id={`${size}${count}`} name={`${size}${count}`} onChange={handleSizes} />
                                    <span> </span>
                                    <label htmlFor={`${size}${count}`}>{size}</label>
                                </h5>
                            )
                        )
                    })}
                </div>
                <p className='card-text'>Promotion: {entry.promotion}%</p>
                <p className='card-text'>Stock: {entry.stock} units</p>
                <button type='button' onClick={() => addToCart(entry)}>Add to Cart</button>
            </div>
            
        </div>
    ));

    return (
        <div className="col mb-4">
            <div className="row">
                {productsList}
            </div>
        </div>
    )
}