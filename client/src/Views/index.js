import React, { Fragment } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import cn from "classnames";
import * as align from "Constants/alignments";
import HomePage from "./Components/HomePage";
import Navbar from "../src/Components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Row className={cn(align.topCenter, align.full, align.noMarginPad)}>
        <Col
          md="12"
          className={cn("h-100", align.leftCenter, align.noMarginPad)}
        >
          <div
            className={cn(
              "h-100",
              align.full,
              align.leftLeft,
              align.noMarginPad
            )}
          >
            <Switch>
              <Route path={`/`} component={HomePage} />
              {/* <Route path={`/error`} component={error} /> */}
              {/* <Redirect to="/error" /> */}
            </Switch>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default App;
