import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">LoginForm</Link>
          </li>
          <li>
            <Link to="/blogs">SignupForm</Link>
          </li>
          <li>
            <Link to="/contact">TodoList</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;