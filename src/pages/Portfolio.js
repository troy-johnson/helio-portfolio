import React from 'react'
import helio from '../helio-aboutme.jpg'
import transformers from '../transformers.jpg'
import clogin from '../colorful-login.jpg'
import '../App.css'

export default () => {
  return (
    <div className="card-deck">
      <div className="card card-inverse">
        <img className="card-img-top" src={helio} alt="Helio - About Me" />
        <div className="card-body">
          <h4 className="card-title">About Me</h4>
          <p className="card-text">Basic HTML/CSS assignment completed for Helio Training.</p>
          <a href="https://codepen.io/troy-johnson/full/aLBBje/" className="btn btn-info">View at CodePen</a>
        </div>
      </div>
      <div className="card card-inverse">
        <img className="card-img-top" src={transformers} alt="Helio - Transformers" />
        <div className="card-body">
          <h4 className="card-title">Object Literals</h4>
          <p className="card-text">An object literal exercise completed for Helio Training.</p>
          <a href="https://github.com/troy-johnson/helio-assignments/blob/master/assignments/object_literals.js" className="btn btn-info">View at GitHub</a>
      </div>
      </div>
      <div className="card card-inverse">
        <img className="card-img-top" src={clogin} alt="Helio - Flexbox" />
        <div className="card-body">
          <h4 className="card-title">Colorful Login</h4>
          <p className="card-text">Flexbox practice completed for Helio Training.</p>
          <a href="https://codepen.io/troy-johnson/full/MEejdP/" className="btn btn-info">View at CodePen</a>
        </div>
      </div>
    </div>
  )
}