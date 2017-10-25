import React from 'react'
import me from '../me.jpg'
import '../App.css';

export default () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h2 className="display-6">About Me</h2>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col-md-4">
            <img src={me} className="img-fluid rounded mx-auto d-block" alt='Me!' />
          </div>
          <div className="col-md-8">
            <p className="lead">Hi! My name is Troy and I love to learn new things. I thoroughly enjoy researching and solving problems of all shapes 
            and sizes. Currently, I am studying to become a full stack web developer specializing in front-end frameworks such as 
            React, Angular, and Bootstrap. I also have a wide range of hobbies and passions such as watching and playing ice hockey, 
            gaming, music, and learning random facts -- anyone for some bar trivia?</p>
          </div>
          </div>
      </div>

      <div className="jumbotron">
        <h2 className="display-6">Experience</h2>
        <hr className="my-4"></hr>
        <h4 className="display-7">Client Relations Manager @ Berkadia Commercial Mortage (2012 - Current)</h4>
        <p className="lead">Managed all aspects of loan servicing for a commercial loan protfolio valued in excess of $4 billion</p>
        <ul>
          <li>Directed various functional business units to execute loan servicing actions</li>
          <li>Researched legal/loan documents to approve or deny borrowing entity changes, loan transfers, property management changes, and other loan requests</li>
          <li>Worked with borrowers to ensure loan compliance regarding insurance, lease, tax, lease, and financial reporting requirements</li>
          <li>Prepared, monitored, and handled loan payoff transactions</li>
        </ul>
        <hr className="my-4"></hr>
        <h4 className="display-7">Lead Compliance Representative (2009 - 2012)</h4>
        <p className="lead">Validated</p>
        <ul>
          <li>Directed various functional business units to execute loan servicing actions</li>
          <li>Researched legal/loan documents to approve or deny borrowing entity changes, loan transfers, property management changes, and other loan requests</li>
          <li>Worked with borrowers to ensure loan compliance regarding insurance, lease, tax, lease, and financial reporting requirements</li>
          <li>Prepared, monitored, and handled loan payoff transactions</li>
        </ul>
      </div>

      <div className="jumbotron">
        <h2 className="display-6">Education</h2>
        <hr className="my-4"></hr>
        <h4 className="display-7">Full-stack Web Development @ Helio Training</h4>
        <p className="lead">Full-stack web development bootcamp focused on front-end and back-end web development</p>
        <h6>Key Technologies</h6>
        <ul>
          <li>HTML/CSS</li>
          <li>Git</li>
          <li>JavaScript (ES6 &amp; JQuery)</li>
            <ul>
              <li>React</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          <li>RESTful APIs</li>
          <li>Linux</li>
          <li>Git</li>
        </ul>
        <hr className="my-4"></hr>
        <h4 className="display-7">Bachelor of Science, Mass Communication @ Unviersity of Utah</h4>
        <p className="lead">Traditional and non-traditional media, marketing, and intra-organizational communication</p>
        <h6>Emphases</h6>
        <ul>
          <li>New Media</li>
          <li>Public Relations</li>
          <li>Advertising</li>
          <li>Journalism</li>
        </ul>
      </div>

        </div>
  )
}