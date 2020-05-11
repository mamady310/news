import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Entertainment from '../components/Entertainment';
import Technology from '../components/Technology';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      recipe: [],
    }
  }

  componentDidMount () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(res => {this.setState({recipe: [...this.state.recipe, res.meals]})
console.log(this.state.recipe);
// console.log(Object.entries(meal));
})
.catch(err => {
	console.log(err);
});
  }
  render () {

    

    return (
      <div className="app">
        <NavBar />
        <Main />
        <Entertainment />
        <Technology />

      </div>
    )
  }
}

export default App;
