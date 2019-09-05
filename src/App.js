import React, { Component} from 'react';
import './App.css';
import MovieRow from './MovieRow'
import $ from 'jquery'



// compiling jsx code to html
// using code along from this https://www.youtube.com/watch?v=bqSSLr8A8PU

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
//     console.log('this is my initializer')

//     const movies = [
//       {id: 0, poster_src: 'http://www.gstatic.com/tv/thumb/v22vodart/12863030/p12863030_v_v8_ah.jpg', title:'Avengers: Infinity War', overview: 'heroes fighting thanos'},
//       {id: 1, poster_src: ' http://www.gstatic.com/tv/thumb/v22vodart/12863030/p12863030_v_v8_ah.jpg', title:'The Avengers', overview: 'superheroes teaming up to fight bad guys'},
//     ]

//     let movieRows = []
//     movies.forEach((movie) => {
//       console.log(movie.title)
//       const movieRow = <MovieRow movie={movie} />
//       movieRows.push(movieRow)
//     })

//     this.state = {rows: movieRows}


this.performSearch ("ant man")

}

performSearch(searchTerm){
  console.log('performan search using moviedb')
  const urlString = "https://api.themoviedb.org/3/search/movie?api_key=43c548179cb686e08a403c19076966e3&query=" + searchTerm
  $.ajax({
    url:urlString,
    success: (searchResults) => {
      console.log('fetched data successfully')
      console.log(searchResults)
      const results = searchResults.results

      var movieRows = []

      results.forEach((movie) => {
        movie.poster_src= "https://image.tmdb.org/t/p/w185" + movie.poster_path
        console.log(movie.title)
        console.log(movie.poster_path)
        const movieRow = <MovieRow key={movie.id} movie={movie}/>
        movieRows.push(movieRow)
      })

      this.setState({rows: movieRows})
    },
  })
}

searchChangeHandler(event) {
  console.log(event.target.value)
  const boundObject = this
  const searchTerm = event.target.value
  boundObject.performSearch(searchTerm)
}


render() {
  return (
    <div className="App">
      <table className='titleBar'>
        <tbody>
          <tr>
            <td>
              <img width='50' alt='movie database search logo' src='logo.svg'/>
            </td>
            <td width='8' />
            <td>
              <h1>Movie Database Search - React Project</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize: 24,
        display:'block',
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} 
        onChange={this.searchChangeHandler.bind(this)} placeholder="enter search here"/>
    
    {this.state.rows}
      
    </div>
    );
  } 
}

export default App;
