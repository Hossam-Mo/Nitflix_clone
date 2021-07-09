import React, { Component } from "react";
import Row from "./Netflix/Row";
import Banner from "./Netflix/Banner";
import "./app.css";
import NetflixNav from "./Netflix/NetflixNav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./profile/Profile";
import Box11 from "./Netflix/com/Box11";
import Nav11 from "./Netflix/com/Nav11";
import { useStateValue } from "./StateProvider";

function Rander() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Switch>
            <Route path="/">
              <div className="app_signIn">
                <div className="dark"></div>
                <Nav11></Nav11>
                <Box11></Box11>
              </div>
            </Route>
          </Switch>
        ) : (
          <div className="app_main">
            {/* <Router>*/}
            <Switch>
              <Route path="/:userid">
                <NetflixNav></NetflixNav>
                <Banner></Banner>
                <Row
                  title="My Favorite Tv Shows"
                  err={1}
                  isLargeRow={true}
                ></Row>
                <Row title="One of The Best Tv Shows Ever" err={2}></Row>
                <Row
                  title="Not That Great But Still Fun to Watch"
                  err={3}
                ></Row>
              </Route>
              <Route path="/">
                <Profile></Profile>
              </Route>
            </Switch>
            {/* </Router>*/}
          </div>
        )}
      </Router>
      {/*  <div className="app_main">
          <Router>
            <Switch>
              <Route path="/:userid">
                <NetflixNav></NetflixNav>

                <Banner></Banner>
                <Row
                  title="My Favorite Tv Shows"
                  err={1}
                  isLargeRow={true}
                ></Row>
                <Row title="One of The Best Tv Shows Ever" err={2}></Row>
                <Row
                  title="Not That Great But Still Fun to Watch"
                  err={3}
                ></Row>
              </Route>
              <Route path="/">
                <Profile></Profile>
              </Route>
            </Switch>
          </Router>
        </div>
  */}
    </div>
  );
}

export default Rander;
