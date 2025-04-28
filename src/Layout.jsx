import { Link, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import "./Layout.css";

export const Layout = () => {
  const sortedRoutes = routes.sort((a, b) => a.name.localeCompare(b.name));
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <nav className="app-navbar">
        <h1 className="app-title">
          <span className="app-icon">⚛️</span>
          React Components Gallery
        </h1>
      </nav>
      
      <div className="app-content">
        <div className="components-grid">
          {sortedRoutes.map((route) => (
            <div 
              key={route.path}
              className="component-card"
              onClick={() => navigate(route.path)}
            >
              <div className="card-content">
                <Link to={route.path} className="component-link">
                  {route.name}
                </Link>
                <div className="card-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};