import React, { Component } from 'react';


class Submit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ""

    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addMovie({
     "title": "TESTER!!!!",
     "rating": 1000,
     "image": "http://www.outdoor-films.com/sites/default/files/film_poster/180southposter.jpg"
    })
  }

  // On a submit event we need to setState of App.js so we need to first pass down that function

  render() {

    return (
      <div id='container'>
        <div>
          <form id="form" onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
              <legend>Submit your own movie</legend><br/><br/>
              Movie Title:
              <input type='text' name="TITLE" /><br/><br/><br/>
              Rating (1-10):
              <input type='text'/><br/><br/><br/>
              Cover photo:
              <input type='text'/><br/><br/><br/><br/>
              <input type="submit" value="Submit" />
            </fieldset>
         </form>
        </div>
        <div>
          <p>We only accept the best, make sure it's a 7+ quality movie!!</p>
        </div>
      </div>
    );
  };
}

export default Submit;

// <fieldset>
// <legend>Personal information:</legend>
// First name:<br>
// <input type="text" name="firstname" value="Mickey"><br>
// Last name:<br>
// <input type="text" name="lastname" value="Mouse"><br><br>
// <input type="submit" value="Submit">
// </fieldset>