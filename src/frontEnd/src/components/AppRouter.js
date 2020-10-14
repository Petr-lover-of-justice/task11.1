import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageHowItWorks from "./PageHowItWorks"
import PageAbout from "./PageAbout"
import PageHome from "./PageHome"
import PageSignIn from "./PageSignIn"


const PAGES = {
  wishList: {
    id: "wishList",
    title: "My WishList",
    path: "/"
  },
  about: {
    id: "about",
    title: "Немного о нас",
    path: "/about"
  },
  howItWorks: {
    id: "howItWorks",
    title: "Как это работает",
    path: "/how_it_works"
  },
  signIn: {
    id: "signIn",
    title: "Авторизация",
    path: "/sign_in"
  }
}

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={PAGES.wishList.path}> {PAGES.wishList.title} </Link>
            </li>
            <li>
              <Link to={PAGES.about.path}> {PAGES.about.title} </Link>
            </li>
            <li>
              <Link to={PAGES.howItWorks.path}> {PAGES.howItWorks.title} </Link>
            </li>
            <li>
              <Link to={PAGES.signIn.path}> {PAGES.signIn.title} </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={PAGES.about.path}>
            <PageAbout />
          </Route>
          <Route exact path={PAGES.howItWorks.path}>
            <PageHowItWorks />
          </Route>
          <Route exact path={PAGES.wishList.path} >
            <PageHome />
          </Route>
          <Route exact path={PAGES.signIn.path} >
            <PageSignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}