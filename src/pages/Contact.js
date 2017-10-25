import React from 'react'
import '../App.css';

// state = {
//   email: '',
//   password: '',
// }

export default () => {
  return (
    <div container="container">
      <div className="jumbotron">
        <h2 className="display-6">Send me a message!</h2>
        <form>
          <div className="form-row">
            <div className="col">
              <input type="text" className="form-control" id="name" placeholder="Your Name" required/>
            </div>
            <div className="col">
              <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
            </div>
          </div>
          <div className="form-group">
            <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..." required/>
          </div>
          <button type="submit" className="btn btn-info">Send</button>
        </form>
      </div>
    </div>
  )
}