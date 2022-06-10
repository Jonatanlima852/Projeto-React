import React from 'react'
import './App.css'
import Menu from './Menu'
import Content from '../componentes/layouts/Content'
import{ BrowserRouter as Router } from 'react-router-dom'

const App = props => (
  <div className="App">
    <Router>
      <Menu/>
      <Content/>
    </Router>
  </div>
)

export default App

