import ProductSmall from "../../components/ProductsSmall"

export default function Sneakers(props) {
    let products = props.props;
    let filtered = products.filter(item => item.type === "sneaker");

    return(
        <div className="row">
            <h2>Sneakers</h2>
            <ProductSmall props={filtered}/>
        </div>
    )
}