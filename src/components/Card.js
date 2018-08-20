import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Card({ item }) {
    return (
        <li key={item._id} className="article">
            <Row>
                <Col md={6} className="img">
                    <div className="date">
                        <p>{item.created}</p>
                    </div>
                </Col>
                <Col md={6} className="desc">
                    <h2 className="name">{item.title}</h2>
                    <p className="text">
                        {item.body}
                    </p>
                    <Link className="link" to={`/article/${item._id}`}>continue reading</Link>
                </Col>
            </Row>
        </li> 
    );
}

export default Card;