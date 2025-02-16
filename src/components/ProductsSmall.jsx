import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductSmall (props) {
    // //render data from mongodb server and express. Transfer to a component later on.
    const [products, setProducts] = useState(props.props);

    const addToCart = (entry) => {
        let cart = {};
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

    //create a list to render in react
    const productsList = products.map(entry => ( 
        <div key={entry.id} className='card col-6'>
            <Link to={`/products/all-products/${entry.id}`} style={{textDecoration: "none", color:"black"}}>
                <img src={entry.images.img1} alt="product image" loading="lazy" />
                <div className='card-body text-start'>
                    <h1 className='card-title'>{entry.name}</h1>
                    <p className='card-text'>Description Short: {entry.descriptionShort}</p>
                    <h3 className='card-text'>Price: ${entry.price}</h3>
                    <div className='card-text'>
                    Sizes: {entry.sizes.map(size => {
                        if (size.small) {
                            return <p key={size._id}>small</p>
                        }
                        })}
                    </div>
                    <p className='card-text'>Promotion: {entry.promotion}%</p>
                    <p className='card-text'>Stock: {entry.stock} units</p>
                </div>
            </Link>
            <button type='button' onClick={() => addToCart(entry)}>Add to Cart</button>
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