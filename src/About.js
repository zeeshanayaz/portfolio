import React, {Component} from 'react';

class About extends Component{
    render(){
        return(
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1">
                            React Developer
                        </h1>
                        <h2 className="subtitle is-3">
                            Frontend Javascript Developer
                        </h2>
                        <p className="subtitle is-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;