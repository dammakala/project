import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Produit from '../Components/Produit'
import Home from '../Components/Home'
import Prod from '../Components/Prod'

class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Produit} />
            <Route path="/Produit" component={Produit} />
            <Route path="/Home" component={Home} />
            <Route path="/Prod" component={Prod} />

          </Switch>
        </Router>
      </div>
    )
  }
}
export default Routing;
