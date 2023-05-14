import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <nav className="logo">
            <h1>
                <Link to="/hats"> <img src="https://cdn-icons-png.flaticon.com/128/10673/10673407.png" alt="logo" /></Link>
            </h1>
            <button>
                <Link to="/hats/new">New Hats</Link>
            </button>
        </nav>
    );
}