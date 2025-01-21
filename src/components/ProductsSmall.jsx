import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductSmall (props) {
    // //render data from mongodb server and express. Transfer to a component later on.
    const [products, setProducts] = useState(props.props);

    console.log(props.props);

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
                <p className='card-text'>Promotion: {entry.promotion}%</p>
                <p className='card-text'>Stock: {entry.stock} units</p>
            </div>
        </div>
    ));

    return (
        <>
            {productsList}
        </>
    )
}