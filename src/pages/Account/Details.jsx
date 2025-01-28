import { useState } from "react"

export default function Details() {
    // temporary data
    const tempAccount = {
        id: 1,
        name: "test",
        email:"test@test.com",
        password: "pass123",
        shipping: "123 Alpha St.",
        postal: "m6b7h5"
    };
    // states
    const [passwordShown, setPasswordShown] = useState(false);
    const [accountDetails, setAccountDetails] = useState(tempAccount);
    

    const showPass = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    // console.log(accountDetails);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAccountDetails(values => ({...values, [name]:value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the data below to the server to update the db; the data is already formatted in the state object
        console.log(e.target.userId.value);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    return(
        <div className="row">
            <div className="col"></div>
            <div className="col-6 text-start">
                <div className="row my-3">
                    <h2>Hi, {tempAccount.name}</h2>
                    <p>Welcome to your account details.</p>
                </div>
                <h4>My Details:</h4>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="userId" id="userId" value={accountDetails.id} />
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="name">Name: </label>
                            <span> </span>
                            <input type="text" id="name" name="name" value={accountDetails.name} onChange={handleChange}/>
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="email">Email: </label>
                            <span> </span>
                            <input type="text" id="email" name="email" value={accountDetails.email} onChange={handleChange}/>
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="password">Password: </label>
                            <span> </span>
                            <input type={passwordShown ? "text" : "password"} id="password" name="password" value={accountDetails.password} onChange={handleChange}/>
                        </h3>
                        <small>
                            <button type="button" className="btn btn-light shadow-none" onClick={showPass}> Show Password</button>
                        </small>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="email">Address: </label>
                            <span> </span>
                            <input type="text" id="shipping" name="shipping" value={accountDetails.shipping} onChange={handleChange}/>
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="email">Postal Code: </label>
                            <span> </span>
                            <input type="text" id="postal" name="postal" value={accountDetails.postal} onChange={handleChange}/>
                        </h3>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}