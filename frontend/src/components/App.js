import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import './App.css';

class App extends Component {

  componentDidMount() {
    const api = "http://localhost:3001"

    let token = localStorage.token
    if (!token)
      token = localStorage.token = Math.random().toString(36).substr(-8)

    const headers = {
      'Authorization': token
    }

    fetch(`${api}/categories`, { headers })
      .then(res => res.json())
      .then(data => console.log(data))

    fetch(`${api}/posts`, { headers })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    console.log(this.props)

    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

function mapStateToProps (posts) {
  return {
    posts: {
      title: '',
      body: ''
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(addPost(data))
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)
