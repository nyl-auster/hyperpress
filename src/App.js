import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";
//
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import client from "./connectors/apollo";
import store from "./connectors/redux";

import "./app.css";

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <Link exact to="/">
              Home
            </Link>
            <Link exact to="/posts/page/1">
              Blog
            </Link>

            {/*<Link to="/about">About</Link>*/}
          </nav>
          <div className="content">
            <Routes />
          </div>
        </div>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default hot(module)(App);
