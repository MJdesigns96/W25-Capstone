import React, { useState } from 'react';

export default function ProductLarge (props) {
    const [product, setProduct] = useState(props.props[0]);

    const addToCart = (entry) => {
        let cart = {};
        //currently the localstorage is overwriting the cart
        if (localStorage.getItem('cart') === null) {
            cart[entry.id] = { details: entry, qty: 1, size: itemSize };
            const strObj = JSON.stringify(cart);
            localStorage.setItem('cart', strObj);
        } else {
            let strObjFromStorage = localStorage.getItem('cart');
            cart = JSON.parse(strObjFromStorage);
            console.log(cart);
            console.log(cart[entry.id]);
            if (cart[entry.id] === undefined) {
                cart[entry.id] = { details: entry, qty: 1, size: itemSize };
                const strObj = JSON.stringify(cart);
                localStorage.setItem('cart', strObj);
            } else if (cart[entry.id].size !== itemSize) {
                let count = Object.keys(cart).length + 1;
                let cartProdId = cart[entry.id].details.id
                let keyForMultiple = `${cartProdId}V${count}`;
                cart[keyForMultiple] =  { details: entry, qty: 1, size: itemSize };
                const strObj = JSON.stringify(cart);
                localStorage.setItem('cart', strObj);
            } else {
                cart[entry.id].qty++;
            }
        }
        console.log(cart);
    }

    let itemSize;

    const handleSizes = (e) => {
        //get the id for the radio button
        let preSplit = e.target.id;
        //split the id into characters
        let split = preSplit.split("");
        //remove the number at the end of id
        split.pop();
        //join the id back together to a string
        let join = split.join("");
        itemSize = join;
    }

    let count = 0;

    const productsItem = (
        <>
            <div className="row">
                <div className="col px-0">
                    <div key={product.id} className='card' style={{height:"50vh"}}>
                        <div className='card-body text-start'>
                        <h1 className='card-title'>{product.name}</h1>
                            <p className='card-text'>Description Short: {product.descriptionShort}</p>
                            <h3 className='card-text'>Price: ${product.price}</h3>

                            <div className='card-text mb-3'>
                                <form>
                                    <div className="card-text">
                                        Sizes: {product.sizes.map(size => {
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
                                                        <input type="radio" id={`${size}${count}`} name={`item${count}`} onChange={handleSizes} />
                                                        <span> </span>
                                                        <label htmlFor={`${size}${count}`}>{size}</label>
                                                    </h5>
                                                )
                                            )
                                        })}
                                    </div>
                                    <button type='button' onClick={() => addToCart(product)}>Add to Cart</button>
                                </form>
                            </div>

                            <p className='card-text'>
                                Colors: {product.colors.map(color => (
                                    color.colorName
                                ))}
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="col px-0">
                    <div id="carouselExampleIndicators" className="carousel slide bg-dark" style={{height:"50vh"}}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={product.images.img1} alt="img 1" loading="lazy" className='img-fluid' />
                            </div>
                            <div className="carousel-item">
                                <img src={product.images.img1} alt="img 2" loading="lazy" className='img-fluid' />
                            </div>
                            <div className="carousel-item">
                                <img src={product.images.img1} alt="img 3" loading="lazy" className='img-fluid' />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row text-start bg-primary-subtle p-5 mb-5">
                <h4>Additional Details:</h4>
                <div className="col">
                    <p className='card-text'>{product.descriptionLong}</p>
                </div>
                <div className="col">
                    {product.additionalDetails.map(prompt => (
                        <ul className='list-group mb-3' key={prompt._id}>
                            <li className='list-group-item'>materials: {prompt.materials}</li>
                            <li className='list-group-item'>Recommended: {prompt.recommendedFor}</li>
                            <li className='list-group-item'>Made In: {prompt.madeIn}</li>
                            <li className='list-group-item'>Care: {prompt.care}</li>
                            <li className='list-group-item'>Shipping: {prompt.shipping}</li>
                        </ul>
                    ))}
                </div>
                <div className="col">
                    <p className='card-text'>Type: {product.type}</p>
                    <p className='card-text'>Materials: {product.materials.map(material => (
                    material.material1
                    ))}</p>
                    <p className='card-text'>Promotion: {product.promotion}%</p>
                    <p className='card-text'>Stock: {product.stock} units</p>
                </div>
            </div>
        </>
        
    )

    return (
        <>
            { productsItem }
        </>
    )
}