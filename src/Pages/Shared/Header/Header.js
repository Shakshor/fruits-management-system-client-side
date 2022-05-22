import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Fruit-Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage_Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/addItem">AddItem</Nav.Link>
                                    <Nav.Link as={Link} to="/manageItem">ManageItem</Nav.Link>
                                    <Nav.Link as={Link} to="/myItem">MyItems</Nav.Link>

                                </>
                            }
                            {
                                user ?
                                    <button onClick={handleSignOut} className='btn btn-link text-primary bg-white text-decoration-none'> Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;