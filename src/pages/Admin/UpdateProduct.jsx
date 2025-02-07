import { useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateProduct(props) {
    // get the prop and id details then set state to that prop
    const { productId } = useParams();
    let productList = props.props;
    let chosenProduct;
    productList.map(entry => {
        if (entry.id == productId) {
            chosenProduct = entry;
        }
    });

    const [product, setProduct] = useState(chosenProduct);
    console.log(product);

    return (
        <>
            <h1>Update</h1>
        </>
    )
}