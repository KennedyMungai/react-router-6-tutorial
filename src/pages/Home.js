import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () =>
{
  return (
    <section className='section'>
      <NavBar />
      <Link to='/about' className="btn">
        About
      </Link>

      <Outlet />
    </section>
  );
};
export default Home;
