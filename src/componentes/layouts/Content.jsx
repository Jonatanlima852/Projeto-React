import React from 'react'
import './Content.css'
import { Routes, Route } from "react-router-dom"

import Home from "../../telas/Home"
import About from "../../telas/About"
import NotFound from "../../telas/NotFound"

const Content = props => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
)

export default Content;