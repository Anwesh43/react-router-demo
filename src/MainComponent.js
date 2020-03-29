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
                  <Link to = "/rect/toprect">RotatingRect</Link>
                </li>
                <li>
                  <Link to = "/circle/topcircle">Circle</Link>
                </li>
              </ul>
              <Switch>
                <Route path = "/rect/:text">
                  <RotatingRect w = {w} h = {h}/>
                </Route>
                <Route path = "/circle/:text">
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
