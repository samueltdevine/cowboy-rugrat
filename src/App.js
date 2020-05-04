import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import styles from "./App.module.css";
import classNames from "classnames";
const routes = [
  {
    href: "/",
    name: "Home",
    isInNavBar: true,
    Component: lazy(() => import("pages/Home")),
  },
  { href: "/music", name: "music", isInNavBar: true },
  { href: "/ig", name: "instagram", isInNavBar: true },
  { href: "/beats", name: "beats", isInNavBar: true },
  { href: "/videos", name: "videos", isInNavBar: true },
  {
    href: "/the-trampoline",
    name: "the trampoline",
    isInNavBar: false,
    Component: lazy(() => import("pages/TheTrampoline")),
  },
];

const App = () => {
  return (
    <div className={styles.siteWrap}>
      <Router>
        <header>
          <h1 className={styles.headText}>
            <span role="img" aria-label="cowboy">
              🤠
            </span>
            <span>cowboy</span>
            <span>rugrat</span>
            <span role="img" aria-label="rat">
              👶
            </span>
          </h1>
          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              {routes
                .filter(({ isInNavBar }) => isInNavBar)
                .map(({ href, name }) => (
                  <NavLink
                    exact
                    to={href}
                    className={styles.navlink}
                    activeClassName={styles.active}
                  >
                    <li key={href}>{name}</li>
                  </NavLink>
                ))}
            </ul>
          </nav>
        </header>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {routes.map(({ Component = () => <></>, href }) => (
              <Route exact key={href} path={href}>
                <Component />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
