import React from 'react'
import ReactDOM from 'react-dom'
import "tuicss"
import "../lib/style.css"
import DocScreen from "./DocScreen"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bios from './Bios'
import Navigation from './components/Navigation'
import Layout from './Layout'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path='/background' element={<DocScreen />} />
          <Route path='/border' element={<DocScreen />} />
          <Route path='/button' element={<DocScreen />} />
          <Route path='/chart' element={<DocScreen />} />
          <Route path='/datetime' element={<DocScreen />} />
          <Route path='/divider' element={<DocScreen />} />
          <Route path='/dropdown' element={<DocScreen />} />
          <Route path='/grid' element={<DocScreen />} />
          <Route path='/codes' element={<DocScreen />} />
          <Route path='/inputs' element={<DocScreen />} />
          <Route path='/layout' element={<Layout />} />
          <Route path='/modals' element={<DocScreen />} />
          <Route path='/navigation' element={<DocScreen />} />
          <Route path='/panel' element={<DocScreen />} />
          <Route path='/progressbar' element={<DocScreen />} />
          <Route path='/screen' element={<DocScreen />} />
          <Route path='/shadow' element={<DocScreen />} />
          <Route path='/shortcut' element={<DocScreen />} />
          <Route path='/sidenav' element={<DocScreen />} />
          <Route path='/statusbar' element={<DocScreen />} />
          <Route path='/table' element={<DocScreen />} />
          <Route path='/tabs' element={<DocScreen />} />
          <Route path='/window' element={<DocScreen />} />
          <Route path='/color' element={<DocScreen />} />
          <Route path='/media' element={<DocScreen />} />
          <Route path='/util' element={<DocScreen />} />
          <Route path='/forecast' element={<DocScreen />} />
          <Route path='/bios' element={<Bios />} />
          <Route path='/' element={<DocScreen />} />
        </Routes>
      </Navigation>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)