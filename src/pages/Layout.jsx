import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Layout(){
    return (
        <>
            <Banner />
            <Header />

            <Outlet />
        </>
    )
}