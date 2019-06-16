import React from 'react'; 
import './App.css';
import Header from './components/header'
import ListeFilm from './components/listFilms';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Accueil from './components/accueil';
import DescriptionFilm from './components/descriptionFilm'
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div >
        
        <Header/>
        <Switch>
            <Route path="/descriptionFilm" component={DescriptionFilm}/>
            <Route path="/listFilms" component={ListeFilm}/>
            <Route path="/" component={Accueil}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
