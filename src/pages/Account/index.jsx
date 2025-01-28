import { Outlet } from "react-router-dom"
import Details from "./Details";

const Accounts = () => {
    return(
        <>
            <Details />

            <Outlet />
        </>
    )
}

export default Accounts;