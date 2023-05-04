import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/exercise41">Exercise 41</Link>
                    </li>
                    <li>
                        <Link to="/exercise42">Exercise 42</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;