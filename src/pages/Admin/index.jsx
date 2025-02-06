import { Outlet } from "react-router-dom"

const Admin = (props) => {
    return (
        <>
            <Outlet props={props} />
        </>
    )
}

export default Admin;