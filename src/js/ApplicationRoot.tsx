/**
 * @file ApplicationRoot
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project tv.trivnow.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */
import * as React from 'react'
import {Route} from 'react-router-dom'
import {ParentRouter} from './ParentRouter'

'use strict';

export class ApplicationRoot extends React.Component {
  render(){
    return (
      <Route path="/" component={ParentRouter}/>
    )
  }
}