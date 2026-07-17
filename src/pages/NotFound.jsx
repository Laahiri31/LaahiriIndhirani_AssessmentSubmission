import { Link } from "react-router-dom";
import "../styles/detail.css"; // or your own notfound.css

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>

      <Link to="/">Back to Menu</Link>
    </div>
  );
};

export default NotFound;