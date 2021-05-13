// client in React

import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Notice from './components/Notice'
import Login from './components/Login'
import Signup from './components/Signup'
import Community from './components/Community'
import Sendnotice from './components/Sendnotice'

const App=()=>{
  return(
    <>
        <Navbar/>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path='/About'>
           <div style={{ display: "flex" }}>
           <div style={{width: "60%"}}>
           <About/>
           </div>
           <div style={{
            width: "40%",
            maxHeight:"100vh",
            background: "#f0f0f0"
            }}>
           <Notice/>
           </div>
           </div>
        </Route>
        <Route path='/Community'>
           <Community/>
        </Route>
        <Route path='/Login'>
           <Login/>
        </Route>
        <Route path='/Signup'>
           <Signup/>
        </Route>
        <Route path='/Sendnotice'>
           <Sendnotice/>
        </Route>
    </>
  )
}

export default App