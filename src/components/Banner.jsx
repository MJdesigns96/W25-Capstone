export default function Banner() {
    return(
        <div className="col mt-3">
            <div id="carouselExample" className="carousel slide bg-info-subtle row py-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h3 className="d-block w-100">Banner 1 for promo content</h3>
                    </div>
                    <div className="carousel-item">
                        <h3 className="d-block w-100">Banner 2 for promo content</h3>
                    </div>
                    <div className="carousel-item">
                        <h3 className="d-block w-100">Banner 3 for promo content</h3>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" style={{filter: "invert(100%)"}} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" style={{filter: "invert(100%)"}} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}