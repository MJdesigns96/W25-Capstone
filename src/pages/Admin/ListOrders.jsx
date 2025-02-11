import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListOrders (props) {
    const [orders, setOrders] = useState();
    useEffect(() => {
        setOrders(props.props);
    }, [props]);

    const ordersList = orders?.map(entry => (
        <tr key={entry.id}>
            <th scope="row">{entry.id}</th>
            <td>{ entry.userId ? entry.userId : "Na" }</td>
            <td>${ entry.total }</td>
            <td>{ entry.paid ? "Yes" : "No" }</td>
            <td>{ entry.shipped ? "Yes" : "No" }</td>
            <td>{ entry.completed ? "Yes" : "No" }</td>
        </tr>
    ))

    return (
        <div className="row">
            <div className="col">
                <div className="row mt-5 mx-5 text-start">
                    <div className="col-2">
                        <Link to={`/admin/dashboard`}>
                            <button type="button" className="btn btn-secondary">Back</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                <h2>Orders List</h2> 
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="orderId">Order ID</th>
                                <th scope="userId">User ID</th>
                                <th scope="total">Total</th>
                                <th scope="paid">Paid</th>
                                <th scope="shipped">Shipped</th>
                                <th scope="completed">Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}