import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';

const Home=()=>{
  return(
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
      <button type="button" class="btn btn-danger btn-lg" style={{margin:'10px',padding:'50px'}}>Search Alumini</button>
      <button type="button" class="btn btn-warning btn-lg" style={{margin:'10px',padding:'50px'}}>Add notable Alumini</button>
      <button type="button" class="btn btn-primary btn-lg" style={{margin:'10px',padding:'50px'}}>Send Message</button>
      <button type="button" class="btn btn-success btn-lg" style={{margin:'10px',padding:'50px'}}>Post on timeline</button>
      <Link class="nav-link active" to="/sendnotice">
      <button type="button" class="btn btn-secondary btn-lg" style={{margin:'10px',padding:'50px'}}>Upload a notice</button>
      </Link>
      </div>
      <div style={{marginTop:"117px"}}>
      <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-text">
           <button class="btn btn-secondary btn-lg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Know us</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasTopLabel"> Know us</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    This project is developed for getting A+ grades and good placement
  </div>
</div>
        </span>
      </div>
     </nav>
     </div>

    </div>
  )
}

export default Home