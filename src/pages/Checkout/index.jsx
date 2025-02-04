import { useEffect, useState } from "react";

export default function Checkout() {
    const [cart, setCart] = useState();
    let items = {...localStorage};
    let userCart;

    //Find a way to take the local storage obj and make elements from them
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
            console.log(cartObj);
            setCart([cartObj]);
        }, []);
        cart.forEach(entry => {
            console.log(entry)
        })
        userCart = (
            <div>
                temp
            </div>
        )
    }

    const clearLocal = () => {
        localStorage.clear();
    }

    return (
        <>
            <h1>
                Checkout
            </h1>
            <div>
                {userCart}
            </div>
            <button type="button" className="btn btn-primary" onClick={clearLocal}>Clear Local</button>
        </>
    )
}