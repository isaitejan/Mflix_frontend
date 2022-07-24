import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import HomePage from "./HomePage";
import MovieDetails from "./MovieDetails";
import MoviesPage from "./MoviesPage";
import NavClass from "./NavClass";
import ShortFilmsPage from "./ShortFilmsPage.js";
// import {store} from '../reduxToolkit/store';

export default class Main extends React.Component{
    
    render(){
        return (
            <Router>
              <Fragment>
                    <div>
                      <NavClass />
                    </div>
                  <div>
                  <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />}/>
                    <Route path="/shortfilms" element={<ShortFilmsPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/clickPath" element={<MovieDetails />} />
                  </Routes>
                </div>
              </Fragment>
            </Router>
            );
    }
}