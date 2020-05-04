import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import styles from "./App.module.css";
const routes = [
  {
    href: "/",
    name: "Home",
    isInNavBar: true,
    isExternal: false,
    Component: lazy(() => import("pages/Home")),
  },
  {
    href: "spotify:artist:30yAH7N8EdCazhRu0xxTEX",
    name: "music",
    isInNavBar: true,
    isExternal: true,
  },
  {
    href: "https://www.instagram.com/cowboy_rugrat/",
    name: "instagram",
    isInNavBar: true,
    isExternal: true,
  },
  {
    href: "/beats",
    name: "beats",
    isInNavBar: true,
    isExternal: false,
    Component: lazy (() => import("pages/Beats"))
  },
  // {
  //   href: "/videos",
  //   name: "videos",
  //   isInNavBar: true,
  //   isExternal: false,
  // },
  {
    href: "/the-trampoline",
    name: "the trampoline",
    isInNavBar: false,
    isExternal: false,
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
                .map(({ href, name, isExternal }) => {
                  if (isExternal) {
                    return (
                      <a className={styles.navlink} href={href} key={href}>
                        <li>{name}</li>
                      </a>
                    );
                  }
                  return (
                    <NavLink
                      exact
                      to={href}
                      className={styles.navlink}
                      activeClassName={styles.active}
                      key={href}
                    >
                      <li>{name}</li>
                    </NavLink>
                  );
                })}
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
