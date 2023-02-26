import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = () =>
{
    return (
        <>
            {/* <NavBar /> */}
            <StyledNavbar />
            <section className='section'>
                <Outlet />
            </section>
        </>
    );
};
export default SharedLayout;
