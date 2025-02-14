import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CheckoutButton(props) {
    //navigate to checkout success
    const navigateTo = useNavigate();

    let checkoutOrder = {
        orderId: props.orderId,
        userId: props.userId,
        items: props.items,
        total: props.total,
        paid: true,
        shipped: false,
        completed: false
    };

    const submitOrder = async(e) => {
        e.preventDefault();
        
        // console.log(checkoutOrder);
        try {
            const response = await axios.post('http://localhost:8888/newOrder', checkoutOrder);
            console.log('Form data submitted', response.data);
            navigateTo(`/checkout/success/${props.orderId}`);
        } catch (err) {
            console.error("Error", err);
        };
    }

    return (
        <button type="button" className="btn btn-primary mb-5" onClick={submitOrder}>Checkout</button>
    )
}