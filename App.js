import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-link"

import Navigation from "./components/navigation/Navigation"

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