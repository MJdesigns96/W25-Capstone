import { Outlet } from "react-router-dom"
import Details from "./Details";

const Accounts = () => {
    return(
        <>
            <h1>Accounts</h1>
            <Details />

            <Outlet />
        </>
    )
}

export default Accounts;