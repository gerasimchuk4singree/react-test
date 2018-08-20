import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Card from './Card';
import { Grid, Row, Col } from 'react-bootstrap';

export default class News extends React.Component {
    state = {
        news: []
    }

    componentDidMount() {
        axios.get('http://api.blog.testing.singree.com/?limit=3 ').then( res => {
            console.log(res.data);
            this.setState({ news: res.data.articles })
        })
    } 

    render() {
        return(
            <div>
                <div className="title_wrapper">
                    <Grid>
                        <Row>
                            <Col md={12}>
                                <h1 className="title">Blog</h1>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Grid>
                    <Row>
                        <Col md={10} className="catalog">
                            <ul className="blog_list">{ this.state.news.map( item => 
                                <Card item={item}/>
                                ) }
                            </ul>
                        </Col>
                        <Sidebar/>
                    </Row>
                </Grid>
                
            </div>
        )
    }
}

