import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductLarge (props) {
    //render data from mongodb server and express. Transfer to a component later on.
    const [product, setProduct] = useState(props.props[0]);

    // restructure so that the item is no longer on a card and can look more like a ecommerce section with upper and lower areas
    const productsItem = (
        <div key={product.id} className='card col-6'>
            <div className='card-body text-start'>
                <h1 className='card-title'>{product.name}</h1>
                <p className='card-text'>Description Short: {product.descriptionShort}</p>
                <h3 className='card-text'>Price: ${product.price}</h3>
                <div className='card-text'>
                Sizes: {product.sizes.map(size => {
                    if (size.small) {
                        return <p key={size._id}>small</p>
                    }
                    })}
                </div>
                <p className='card-text'>
                Colors: {product.colors.map(color => (
                    color.colorName
                ))}
                </p>
                <p className='card-text'>Description Long: {product.descriptionLong}</p>
                <h4>Additional Details:</h4>
                {product.additionalDetails.map(prompt => (
                <ul className='list-group mb-3' key={prompt._id}>
                    <li className='list-group-item'>materials: {prompt.materials}</li>
                    <li className='list-group-item'>Recommended: {prompt.recommendedFor}</li>
                    <li className='list-group-item'>Made In: {prompt.madeIn}</li>
                    <li className='list-group-item'>Care: {prompt.care}</li>
                    <li className='list-group-item'>Shipping: {prompt.shipping}</li>
                </ul>
                ))}
                <p className='card-text'>Type: {product.type}</p>
                <p className='card-text'>Materials: {product.materials.map(material => (
                material.material1
                ))}</p>
                <p className='card-text'>Promotion: {product.promotion}%</p>
                <p className='card-text'>Stock: {product.stock} units</p>
            </div>
        </div>
    )

    return (
        <>
            { productsItem }
        </>
    )
}