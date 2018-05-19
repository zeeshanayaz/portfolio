import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            // <h1>Navbar</h1>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src="https://lh3.googleusercontent.com/--aIAr8Uuams/WwAQMA9BClI/AAAAAAAAAD8/BS-EesExeF8st4MKp1t-tsp8ULH9Q54DgCJoC/w530-h530-n-rw/Teqnic-Logo%2528transparent%2529.png"
                        alt="Bulma: a modern CSS framework based on Flexbox" width="30" height="30" />
                    </a>

                    <a role="button"  className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu" style={{'display':'block'}}>
                    <div className="navbar-end">
                        <Link  to="/home" className="navbar-item">Home</Link>
                        <Link  to="/about" className="navbar-item">About</Link>
                        <Link  to="/blog" className="navbar-item">Blog</Link>
                        <Link  to="/contact" className="navbar-item">Contact</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

