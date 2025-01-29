import { Outlet } from "react-router-dom"

const Accounts = () => {
    // get data from db and pass down props to set new user's id's
    return(
        <>
            <Outlet />
        </>
    )
}

export default Accounts;