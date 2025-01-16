import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductLarge () {
    //render data from mongodb server and express. Transfer to a component later on.
    const [products, setProducts] = useState([]);

    //fetch from express server
    useEffect(()=> {
        axios.get('http://localhost:8888/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error));
    }, []);

    // console.log(products);
    //create a list to render in react
    const productsList = products.map(entry => (
        <div key={entry.id} className='card col-6'>
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
                <p className='card-text'>
                Colors: {entry.colors.map(color => (
                    color.colorName
                ))}
                </p>
                <p className='card-text'>Description Long: {entry.descriptionLong}</p>
                <h4>Additional Details:</h4>
                {entry.additionalDetails.map(prompt => (
                <ul className='list-group mb-3' key={prompt._id}>
                    <li className='list-group-item'>materials: {prompt.materials}</li>
                    <li className='list-group-item'>Recommended: {prompt.recommendedFor}</li>
                    <li className='list-group-item'>Made In: {prompt.madeIn}</li>
                    <li className='list-group-item'>Care: {prompt.care}</li>
                    <li className='list-group-item'>Shipping: {prompt.shipping}</li>
                </ul>
                ))}
                <p className='card-text'>Type: {entry.type}</p>
                <p className='card-text'>Materials: {entry.materials.map(material => (
                material.material1
                ))}</p>
                <p className='card-text'>Promotion: {entry.promotion}%</p>
                <p className='card-text'>Stock: {entry.stock} units</p>
            </div>
        </div>
    ))

    return (
        <>
            {productsList}
        </>
    )
}