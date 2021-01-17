import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Admin from './containers/Admin';
import Home from './containers/Home';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import About from './containers/About';
import Gallery from './containers/Gallery';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />

        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/admin-upload"  component={Admin}/>

        <Footer/>

        
      </div>
    </Router>
  );
}

export default App;
