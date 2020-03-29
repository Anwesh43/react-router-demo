import {
    Switch,
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom'

import React from 'react'
import {useDimension} from './hooks'
import RotatingRect from './RotatingRect'
import JumpingCircle from './JumpingCircle'
import Home from './Home'


const MainComponent = () => {
    const {w, h, resize, disableResizing} = useDimension()
    return (<Router>
            <div>

              <ul>
                <li>
                  <Link to = "/">Home</Link>
                </li>
                <li>
                  <Link to = "/rect">RotatingRect</Link>
                </li>
                <li>
                  <Link to = "/circle">Circle</Link>
                </li>
              </ul>
              <Switch>
                <Route path = "/rect">
                  <RotatingRect w = {w} h = {h}/>
                </Route>
                <Route path = "/circle">
                  <JumpingCircle w = {w} h = {h}/>
                </Route>
                <Route path = "/">
                  <Home/>
                </Route>
              </Switch>
              </div>
            </Router>
            )
}

export default MainComponent
