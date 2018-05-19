import React, {Component} from 'react';

export default class Contact extends Component{
    render(){
        return(
            <section className="hero  is-success is-fullheight">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title is-1 has-text-centered">Lets get in touch!</h1>
                    <br /><br />
                    <form>
                        <div className="columns">

                        <div className="column">
                            <div className="field">
                            <div className="control has-icons-left has-icons-right">
                                <input name="name" className="input is-large" type="text" placeholder="Your Name" required />
                                <span className="icon is-small is-left">
                                <i className="fa fa-user"></i>
                                </span>
                            </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="field">
                            <div className="control has-icons-left has-icons-right">
                                <input name="email" className="input is-large"
                                type="email" placeholder="Your Email" required />
                                <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                                </span>
                            </div>
                            </div>
                        </div>

                        </div>

                        <div className="field">
                        <div className="control">
                            <textarea name="comments" className="textarea is-large"
                            placeholder="What's Up?" required></textarea>
                        </div>
                        </div>

                        <div className="field is-grouped">
                        <div className="control">
                            <button type="submit" className="button is-link is-large">Submit</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </section>
        );
    }
}