import { Link, useHistory } from "react-router-dom";
import { History } from "history";
const Navbar = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }

    return ( 
        <nav className="navbar">
            <h1 onClick={ handleClick }> My Blog </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav> 
     );
}
 
export default Navbar;