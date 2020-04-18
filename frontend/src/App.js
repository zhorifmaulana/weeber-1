import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import LoginPage from "./pages/login-page";
import ShortenLinkPage from "./pages/shorten-link-page";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(fab, faBars);

function App() {
  const [linkTree, setLinkTree] = useState([
    {
      link: "init",
      short_link: "init",
    },
  ]);
  const url = "http://35.240.223.151:8011/link_tree";
  useEffect(() => {
    let isCancelled = false;
    async function getData() {
      if (!isCancelled) {
        const res = await fetch(url);
        const data = await res.json();
        setLinkTree(data.data);
      }
    }
    getData();

    return () => {
      isCancelled = true;
    };
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route
          path="/link-tree"
          render={() => <ShortenLinkPage url={url} linkTree={linkTree} />}
        />

        {linkTree.map((link) => (
          <Route
            key={link.id}
            path={`/${link.short_link}`}
            component={() => {
              window.location.href = link.link;
            }}
          />
        ))}
      </Switch>
    </div>
  );
}

export default App;
