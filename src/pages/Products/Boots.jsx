import ProductSmall from "../../components/ProductsSmall";

export default function Boots(props) {
    let products = props.props;
    let filtered = products.filter(item => item.type === "boot");

    return(
        <div className="row">
            <h2>Boots</h2>
            <ProductSmall props={filtered}/>
        </div>
    )
}