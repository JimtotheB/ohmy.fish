import * as React from 'react'
// const React = window.React
// const ReactDom = window.ReactDOM
import {render} from 'react-dom'
import {ApplicationRoot} from './ApplicationRoot'
import {BrowserRouter} from 'react-router-dom'
import {Theme} from "../Theme";
import {Grommet} from "grommet";

render(
  <BrowserRouter>
    <Grommet theme={Theme} full>
      <ApplicationRoot/>
    </Grommet>
  </BrowserRouter>,
  document.getElementById('omfpackages')
)