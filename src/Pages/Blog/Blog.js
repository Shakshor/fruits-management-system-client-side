import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h2>Answer the Questions..</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>!!!!!!!!!!!!</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quas fugit molestias, earum repellat quasi itaque voluptatem molestiae unde consectetur!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>!!!!!!!!!!!!</Accordion.Header>
                    <Accordion.Body>
                        dssssssssssssssssss
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>dssssssssssssssss?</Accordion.Header>
                    <Accordion.Body>
                        dsffffffffffffffff
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;