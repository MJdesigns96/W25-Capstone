import { useState } from "react"
import { useNavigate  } from "react-router-dom"

export default function Register() {
    // states
    const [passwordShown, setPasswordShown] = useState(false);

    const showPass = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    //use history to redirect
    let navigateTo = useNavigate();

    const submitFunction = (e) => {
        e.preventDefault();
        // get a server method to send the data to the server then use session info to show user their info once redirected
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        navigateTo('/accounts/details');
    }

    return(
        <div className="row my-3">
            <div className="col"></div>
            <div className="col-6 text-start">
                <h1 className="my-3">Register</h1>
                <form onSubmit={submitFunction}>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="name">Name: </label>
                            <span> </span>
                            <input type="text" id="name" name="name" />
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="email">Email: </label>
                            <span> </span>
                            <input type="email" id="email" name="email" />
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="password">Password: </label>
                            <span> </span>
                            <input type={passwordShown ? "text" : "password"} id="password" name="password" />
                        </h3>
                        <small>
                            <button type="button" className="btn btn-light shadow-none" onClick={showPass}> Show Password</button>
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}