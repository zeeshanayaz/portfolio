import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Navbar from './Navbar';
import Contact from './Contact'
import 'bulma/css/bulma.css';


class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}
export default App;