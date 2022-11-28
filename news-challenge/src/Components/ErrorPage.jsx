import "./css/error.css";
import { Link } from "react-router-dom";
const ErrorPage = ({ error }) => {
  return (
    <div className="error">
      <h1>Sorry...</h1>
      <p>Did you get turned around? Nothing to see here.</p>
      <p>
        <Link to={"/"}>Head home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
