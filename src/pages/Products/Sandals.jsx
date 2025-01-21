import ProductSmall from "../../components/ProductsSmall"

export default function Sandals(props) {
    return(
        <div className="row">
            <h2>Sandals</h2>
            <ProductSmall props={props.props}/>
        </div>
    )
}