import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
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

const App = () => (
  <Router>
    <header>
      <h1 className={styles.headText}>
        <span>cowboy</span>
        <span>rugrat</span>
      </h1>
      <nav>
        <ul className={styles.navlinks}>
          {routes
            .filter(({ isInNavBar }) => isInNavBar)
            .map(({ href, name }) => (
              <li className={styles.navlink} key={href}>
                <Link to={href}>{name}</Link>
              </li>
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
);

export default App;
