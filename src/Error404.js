import { Link } from "react-router-dom";
const Error404 = () => {
    return ( 
        <div className="Error404">
            <h2>Sorry, Not Sorry!</h2>
            <p> Want to add this page ? Contact the Developer </p>
            <h5><Link to="/"> Click here </Link> to go back to the home page. </h5>
        </div>
     );
}
 
export default Error404;