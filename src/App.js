import React, { Component } from 'react'
import github from './gh.png'
import linkedin from './li.png'
import twitter from './twitter.png'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
         <nav className="navbar navbar-expand-lg navbar-dark fixed-top col">
         <a className="navbar-brand" href="/">Troy Johnson</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon">
           </span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
               <a className="nav-link" href="/"><span className="sr-only">(current)</span></a>
             </li>
             <li className="nav-item form-inline my-2 my-lg-0">
               <a className="nav-link" href="/portfolio">Portfolio</a>
             </li>
             <li className="nav-item form-inline my-2 my-lg-0">
               <a className="nav-link" href="/contact">Contact</a>
             </li>
           </ul>
           <div className="form-inline my-2 my-lg-0">
             <a className="nav-link p-2" href="https://github.com/troy-johnson"><img className="social" src={github} alt="GitHub"/></a>
           </div>
           <div className="form-inline my-2 my-lg-0">
             <a className="nav-link p-2" href="https://twitter.com/troyjohnson57"><img className="social" src={twitter} alt="Twitter"/></a>
           </div>
           <div className="form-inline my-2 my-lg-0">
             <a className="nav-link p-2" href="https://www.linkedin.com/in/troy-johnson-79b51547/"><img className="social" src={linkedin} alt="LinkedIn"/></a>
           </div>
         </div>
       </nav>
        <body>
          <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Router>
          </div>
        </body>
      </div>
    );
  }
}