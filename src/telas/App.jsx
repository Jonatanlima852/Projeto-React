import React from 'react'
import './App.css'
import Menu from './Menu'
import About from './About'
import Content from '../componentes/layouts/Content'
import{ BrowserRouter as Router } from 'react-router-dom'

const App = props => (
  <div className="App">
    <Router>
      <Menu/>
      <About/>
      <Content/>
    </Router>
    <p>aloooo</p>
  </div>
)

export default App

