import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
         "title": "Requiem for a Dream",
         "rating": 8,
         "image": "https://upload.wikimedia.org/wikipedia/en/9/92/Requiem_for_a_dream.jpg"
        },
        {
         "title": "Batman",
         "rating": 10,
         "image": "http://screencrave.com/wp-content/uploads/2012/07/Batman-The-Dark-Knight-Rises.jpg"
        },
        {
         "title": "Schindler's List",
         "rating": 10,
         "image": "http://ia.media-imdb.com/images/M/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_UY1200_CR73,0,630,1200_AL_.jpg"
        }
      ],
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Movie Recommender</h2>
        </div>
        <div className="App-intro">
          <Container data={this.state.data} />
        </div>
      </div>
    );
  }
}

class Container extends Component {
  constructor(props) {
    super(props)

  }

  randIdx() {
    var dataLength = this.props.data.length;
    return Math.floor(dataLength * Math.random());
  };

  render() {
    var temp = this.randIdx();
    return (
      <div id='container'>
        <div>
          <Title title={this.props.data[temp].title} />
        </div>
        <div>
          <Image image={this.props.data[temp].image} />
        </div>
        <div>
          <Rating rating={this.props.data[temp].rating} />
        </div>
        <p>
          <a href="/submit">Submit movie</a> ~ <a href="/">Get Movie Recommendation.</a>
        </p>
      </div>
    );
  };
}

var Title = ({title}) => (
  <div id="title">
    <h2>{title}</h2>
  </div>
)

var Image = ({image}) => (
  <div id="image">
   <img src={image} alt="batman" />
  </div>
)

var Rating = ({rating}) => (
  <div id="rating">
    <p>{rating}</p>
  </div>
)

export default App;
