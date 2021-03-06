import React, { Fragment } from "react";
import {
  Route,
  Switch,
  Redirect,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import HomePage from "./Components/HomePage";
import Explore from "./Components/Explore";
import ExploreDetails from "./Components/ExploreDetails";
import Error from "./Components/Error";
import Navbar from "./Components/HomePage/Navbar";
import Footer from "./Components/Footer";

import cn from "classnames";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <div>
          {/* <Switch> */}

          {/* ### Change the error route to be default if one of the other pages is not exact */}
          <Route path="/error" component={Error} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/explore/details/:id" component={ExploreDetails} />
          {/* <Redirect to="/" /> */}
          {/* </Switch> */}
        </div>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;

/* <Router>
        <div>
          <Route path="/" component={HomePage} />
          <Route path="/error" component={Error} />
        </div>
      </Router> */

/* <HomePage /> */

// <Route path={`${match.url}eventflow`} component={EventFlow} />

// <Route path={`/error`} component={error} />
// <Redirect to="/error" />
