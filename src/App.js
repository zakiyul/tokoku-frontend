import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import routes from "./routes";

export default function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <ul className="menu">
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" activeClassName="active">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/toko" activeClassName="active">
              Toko
            </NavLink>
          </li>
        </ul>
        <div className="main">
          <Switch>
            {routes.map((routes, i) => {
              const { path, Component } = routes;
              return (
                <Route key={i} path={path}>
                  <Component />
                </Route>
              );
            })}
          </Switch>
        </div>
      </div>
    </React.Suspense>
  );
}
