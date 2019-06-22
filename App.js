import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-link"

import Navigation from "./components/navigation/Navigation"

import Home from "./components/layout/Home"
import Contact from "./components/layout/Contact"
import About from "./components/layout/About"


class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default App