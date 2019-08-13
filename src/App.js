import React, { Component} from 'react';
import './App.css';
import MovieRow from './MovieRow.js'



// compiling jsx code to html
// using code along from this https://www.youtube.com/watch?v=bqSSLr8A8PU

class App extends Component {
  constructor(props){
    super(props)
    console.log('this is my initializer')

    const movies = [
      {id: 0, poster_src: 'http://www.gstatic.com/tv/thumb/v22vodart/12863030/p12863030_v_v8_ah.jpg', title:'Avengers: Infinity War', overview: 'heroes fighting thanos'},
      {id: 1, poster_src: ' http://www.gstatic.com/tv/thumb/v22vodart/12863030/p12863030_v_v8_ah.jpg', title:'The Avengers', overview: 'superheroes teaming up to fight bad guys'},
    ]

  

    let movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie} />
      
     
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
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
        placeholder='enter search term'/>
    
    {this.state.rows}
      
    </div>
    );
  } 
}

export default App;
