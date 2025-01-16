export default function LandingAboutUs() {
    return(
        <div className="bg-dark col" style={{height: "50vh"}}>
            <div className="row mt-5 text-light">
                <h1 className="mb-3">Our Mission</h1>
                <hr></hr>
                <p>This is a text blurb talking about our mission and the various things that we want to do for the world and what matters to us. If these things resonate with you please buy our products and give us some money. In kind we will donate 1% of our profits to charities that matter to us.</p>
                <p>The values that matters to us are as follows:</p>
            </div>
            <div className="row mt-2 text-light">
                <div className="col-4">
                    <div className="card">
                        <div className="card-footer">
                            <h5 className="card-title">Value</h5>
                            <small>a description of the value</small>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-footer">
                            <h5 className="card-title">Value</h5>
                            <small>a description of the value</small>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-footer">
                            <h5 className="card-title">Value</h5>
                            <small>a description of the value</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}