import ProductSmall from "../../components/ProductsSmall"

export default function Sandals(props) {
    let products = props.props;
    let filtered = products.filter(item => item.type === "sandal");

    return(
        <div className="row">
            <h2>Sandals</h2>
            <ProductSmall props={filtered}/>
        </div>
    )
}