import React from 'react';
import axios from 'axios';
import Accordion from './Accordion';
import { Grid, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Sidebar extends React.Component {

    state = {
        news: []
    }

    componentDidMount() {
        axios.get('http://api.blog.testing.singree.com/?limit=2 ').then( res => {
            this.setState({ news: res.data.articles })
        })
    } 

    render() {
        return(
            <div className="sidebar">
                <Col md={2}>
                    <div className="title">Contact us today for more information.</div>
                    <div className="subtitle"><i className="fas fa-star"></i>Popular</div>
                    <ul className="blog_list">{ this.state.news.map( item => 
                        <li key={item._id} className="article">
                            <Link to={`/article/${item._id}`}><h2 className="name">{item.title}</h2></Link>
                            <p className="text">
                                {item.body}
                            </p>
                        </li> 
                        ) }
                    </ul>
                    <div className="subtitle"><i className="fas fa-archive"></i>Archive</div>
                    <Accordion/>
                </Col>
            </div>
        )
    }
}

