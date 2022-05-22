import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h2>Answer the Questions..</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Differences between JavaScript and Node.js?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>JS is a programming language used for writing scrips in website. NodeJS is a JavaScript runtime environment.</li>
                            <li>JS is used on client side. NodeJS is used on server side.</li>
                            <li>JS can play with DOM. NodeJS does not have that ability.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Differences between Sql and No-Sql Database?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Sql is relational database management system. Non-Sql is a non-relational or distributed database system.</li>
                            <li>Sql have fixed or static schema. Non-Sql have dynamic schema.</li>
                            <li>Sql are not suited for hierarchical data storage. Non-Sql are best suited for hierarchical data storage</li>
                            <li>Sql are best suited for complex queries. Non-Sql are not so good for complex queries</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the purpose of JWT and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        <p> JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. It is used to secure the api.</p>
                        <p> JWT token contain a set of claims.Claims are used to pass information between two parties. JWT token have three parts - the header, payload, secure. </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;