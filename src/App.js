import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
         title: 'Batman',
         rating: 10,
         image: 'http://screencrave.com/wp-content/uploads/2012/07/Batman-The-Dark-Knight-Rises.jpg'
        }
      ]
    };
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
  render() {
    return (
      <div id='container'>
        <div>
          <Title title={this.props.data[0].title} />
        </div>
        <div>
          <Image title={this.props.data[0].image} />
        </div>
        <div>
          <Rating title={this.props.data[0].rating} />
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
