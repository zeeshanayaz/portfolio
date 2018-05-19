import React, {Component} from 'react';
import Axios from 'axios';

class Blog extends Component{

    constructor(){
        super();

        this.state = {
            blogs : []
        }
    }

    componentWillMount(){
        let url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.freecodecamp.org/feed";
        Axios.get(url).then(function(res){
            // console.log(res)
            let items = res.data.items;
            this.setState({
                blogs: items
            });
        }.bind(this))
        .catch(function(err){

        });
    }

    render(){
        let blogs = this.state.blogs;
        // console.log('Blogs: ', blogs)
        let arrBlogsItems = [];

        for (let index in blogs){
            let blog = blogs[index];
            // console.log(blog);
            arrBlogsItems.push(
                <div key={index}  className="columns">
                    <div className="column">
                <a href={blog.link} target="_blank">
                    <div className="card">
                        <div className="card-content">
                            <div className="columns">
                            <div className="column">
                                <figure className="image is-2by1">
                                <img src={blog.thumbnail} alt="Blog thumbnail" />
                                </figure>
                            </div>
                            <div className="column is-three-quarters">
                                <p className="title is-4">
                                {blog.title}
                                </p>
                                <p className="subtitle">
                                <span>By </span>
                                {blog.author}
                                </p>
                                <span>{blog.pubDate}</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
                </div>
            );
        }

        return(

            

            <section className="hero is-light is-fullheight">
                <p className="has-text-centered is-size-1 has-text-primary has-text-weight-bold">Blog</p>
               <div className="hero-body">
                    <div className="container">
                        {arrBlogsItems}

                    </div>
                </div>
            </section>
        );
    }
}
export default Blog;