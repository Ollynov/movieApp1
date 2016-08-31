import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Submit from './Submit.js'
//var server = require('./server.js')

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
         "title": "The Dark Knight",
         "rating": 10,
         "image": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
        },
        {
         "title": "Life of Pi",
         "rating": 9,
         "image": "https://resizing.flixster.com/HV4X3qg7u_pfw7eUpQPk-Tn0CPs=/fit-in/800x1200/v1.bTsxMTE3MTcwMDtqOzE3MTM5OzEyMDA7ODAwOzEyMDA"
        },
        {
         "title": "Silver Linings Playbook",
         "rating": 9,
         "image": "https://upload.wikimedia.org/wikipedia/en/9/9a/Silver_Linings_Playbook_Poster.jpg"
        },
        {
         "title": "Shutter Island",
         "rating": 9,
         "image": "http://ia.media-imdb.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_UY1200_CR83,0,630,1200_AL_.jpg"
        },
        {
         "title": "Inception",
         "rating": 9,
         "image": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX640_SY720_.jpg"
        },
        {
         "title": "World of Tomorrow",
         "rating": 7,
         "image": "http://www.larsenonfilm.com/wp-content/uploads/2015/07/world-of-tomorrow-review.jpg"
        },
        {
         "title": "180 Degrees South",
         "rating": 7,
         "image": "http://www.outdoor-films.com/sites/default/files/film_poster/180southposter.jpg"
        },
      ],
      currentPage: "Container"
    }
    this.changePage = this.changePage.bind(this);
    this.addMovie = this.addMovie.bind(this);

  };

  addMovie(movie) {
    var newMovieArr = this.state.data;
    newMovieArr = newMovieArr.concat(movie);
    //console.log(newMovieArr)
    this.setState({data: newMovieArr});
    console.log(this.state.data)
  }

  // throw this as a prop when instantiating Submit addMovie={this.addMovie}

  changePage(path) {
    this.setState({currentPage: path})
    console.log('and the path passed into changePath is: ', path);
  }
  // we can totally pass in a path argument here for better future functionality
  // we will also need to pass down the changePage function to Container
  // changePage={this.state.changePage}

  render() {
    if (this.state.currentPage === "Container") {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Movie Recommender</h2>
          </div>
          <div className="App-intro">
            <Container data={this.state.data} changePage={this.changePage}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Movie Recommender</h2>
          </div>
          <div className="App-intro">
            <Submit addMovie={this.addMovie}/>
          </div>
        </div>
      );
    }
  }
}

// At the App-intro we want to either render Container or Submit

class Container extends Component {
  constructor(props) {
    super(props)

  }

  randIdx() {
    var dataLength = this.props.data.length;
    return Math.floor(dataLength * Math.random());
  };

  handleClick() {
    console.log('args:', arguments[0]);
    this.props.changePage(arguments[0]);
  }

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
          <button onClick={this.handleClick.bind(this, "Submit")}>Submit Movie</button>
          <button onClick={this.handleClick.bind(this, "Container")}>Get Recommendation</button>
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
