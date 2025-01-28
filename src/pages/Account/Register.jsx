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
        <div className="row">
            <div className="col">
                <h1>Register</h1>
                <form onSubmit={submitFunction}>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="name">Name: </label>
                            <span> </span>
                            <input type="text" id="name" name="name" placeholder="Name"/>
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="email">Email: </label>
                            <span> </span>
                            <input type="email" id="email" name="email" placeholder="Email"/>
                        </h3>
                    </div>
                    <div className="row my-2">
                        <h3>
                            <label htmlFor="password">Password: </label>
                            <span> </span>
                            <input type={passwordShown ? "text" : "password"} id="password" name="password" placeholder="Password" />
                        </h3>
                        <small>
                            <button type="button" className="btn btn-light shadow-none" onClick={showPass}> Show Password</button>
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    )
}