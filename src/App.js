import React, { Component } from 'react'
import './App.css';
import Home from './Home';
import WithLoading from './Loader'

const MovieWithLoading = WithLoading(Home)

export default class App extends Component {
  state = {
    loading :false
  }
 

  componentDidMount() {
    setTimeout(() => {this.setState({
      loading:true
    })
      
    }, 3000);
  
    
  }
  render() {
    return (
      <MovieWithLoading isLoading={this.state.loading}/>
    )
  }
}
