/**
 * @file ParentRouter
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project tv.trivnow.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */


'use strict';
import * as React from 'react'
// const React = window.React
import {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {Nav} from './Components/Nav'
import {LandingContainer} from './Containers/LandingContainer'
import {Footer} from "./Components/Footer";
import {NoMatch} from "./Components/NoMatch";

export class ParentRouter extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={LandingContainer}/>
          <Route exact path="/themes" component={()=> <LandingContainer filter={'theme'}/>}/>
          <Route exact path="/plugins" component={()=> <LandingContainer filter={'plugin'}/>}/>
          <Route component={NoMatch}/>>
        </Switch>
        <Footer/>
      </div>
    )
  }
}