import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutButton from "../../components/CheckoutButton";


export default function Checkout(props) {
    const [cart, setCart] = useState();
    let items = {...localStorage};
    let userCart;

    //Find a way to take the local storage obj and make elements from them
    console.log(items.cart === undefined);
    if (items.cart === undefined) {
        userCart = (
            <div>
                <h3>There is nothing in your cart.</h3>
            </div>
        )
    } else {
        let strObjFromStorage = items.cart;
        let cartObj = JSON.parse(strObjFromStorage);
        useEffect(() => {
            let temp = [];
            for (const [key, value] of Object.entries(cartObj)) {
                temp.push(value);
            }
            setCart(temp);
        }, []);
    }

    let subtotal = 0;
    let taxes = 0;
    let shipping = 0;
    let total = 0;

    let checkoutItems = () => {
        // get item details from localstorage
        userCart = cart?.map(entry => (
            <div className="row" key={entry.details.id}>
                <div className="col"></div>
                <div className="col">
                    <h4>{entry.details.name}</h4>
                    <p>${entry.details.price.toFixed(2)}</p>
                    <h5>Quantity: {entry.qty}</h5>
                </div>
            </div>
        ));
        
        //set subtotal
        cart?.map(entry => 
            subtotal += (entry.details.price * entry.qty)
        );
        taxes = subtotal * 0.13;
        total = subtotal + shipping + taxes;
    }    
    checkoutItems();

    //use history to redirect
    let navigateTo = useNavigate();
    
    const clearLocal = () => {
        localStorage.clear();
        navigateTo(0);
    }

    let rightSide;
    if (items.cart === undefined) {
        rightSide = (
            <div>
                <h2>There is nothing in your Cart</h2>
            </div>
        )
    } else {
        rightSide = (
            <div className="col bg-secondary-subtle my-5">
                <div className="row">
                    {userCart}
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder="Discount code or gift code" />
                    </div>
                    <div className="col">
                        <button type="button">Apply</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-end mx-5">
                        <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                        <h4>Shipping: {
                            shipping === 0 ? "Free" :
                            "$ "+ shipping.toFixed(2)
                        }</h4>
                        <h4>Taxes: ${taxes.toFixed(2)}</h4>
                        <h3 className="mt-4">Total: ${total.toFixed(2)}</h3>
                    </div>
                </div>
            </div>
        )
    }

    //variables to pass down to checkout button
    let orderId, userId, checkoutCart

    if (items.cart !== undefined ) {
        orderId = props.props.length + 1;
        userId = items.userId;
        checkoutCart = JSON.parse(items.cart)
    }
    

    return (
        <>
            <div className="row">
                <div className="col my-5">
                    <h3>Payment Details</h3>
                </div>
                {rightSide}
            </div>
            { items.cart === undefined ? "" : <CheckoutButton orderId={orderId} userId={userId} items={checkoutCart} total={total} /> }
            <button type="button" className="btn btn-primary mb-5" onClick={clearLocal}>Clear Local</button>
        </>
    )
}