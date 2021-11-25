import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Head from "./components/Head";
import Skills from './components/Skills';
import Load from './components/Load';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import './index.css';



const Main = () =>{
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return(
    <Router>
    <Load load={load}/>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Head}/>
    <Route path="/skills" exact component={Skills}/>
    </Switch>
    </Router>
  );
};




ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

