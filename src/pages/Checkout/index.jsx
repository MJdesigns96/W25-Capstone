export default function Checkout() {
    let items = {...localStorage};
    let strObjFromStorage = items.cart;
    let cart = JSON.parse(strObjFromStorage);
    console.log(cart);

    return (
        <>
            <h1>
                Checkout
            </h1>
        </>

        // https://stackoverflow.com/questions/70150046/how-to-assign-an-object-to-local-storage-instated-of-assigning-with-every-single
    )
}