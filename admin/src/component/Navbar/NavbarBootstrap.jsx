import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarBootstrap.css';
import { Link } from 'react-router-dom';
import Furniture from './../Furniture/Furniture';
import Solar from './../Home/Solars';

function NavbarBootstrap() {
    const [showDoorsDropdown, setShowDoorsDropdown] = useState(false);
    const [showFurnitureDropdown, setShowFurnitureDropdown] = useState(false);
    const [showSolarDropdown, setShowSolarDropdown] = useState(false);

    return (
        <Navbar className='navbar-bootstrap' expand="lg" bg="#e19898" variant="#e19898">
                <div>
          <Link to>Furni</Link>
          <Link>Door</Link>
          <Link>Solar</Link>
          <Link>Parqueting</Link>
          <Link>Chimney</Link>
          <Link>Cncjali</Link>
          <Link>wall panel</Link>
          <Link>Decorative icons</Link>





         
      </div>
            <Container>
                <Navbar.Brand>
                    <div className="logo"><Link to="/"><img src="/images/Logo1.png" alt="" className="logo-home" /></Link></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-bootstrap-aria-controls' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link className='navbar-bootstrap-custom-link' to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/aboutus' className='navbar-bootstrap-custom-link'>About Us</Link></Nav.Link>
                       <NavDropdown
                            title="Doors"
                            id="basic-nav-dropdown"
                            show={showDoorsDropdown}
                            onMouseOver={() => setShowDoorsDropdown(true)} // Show the dropdown on hover
                            onMouseOut={() => setShowDoorsDropdown(false)} // Hide the dropdown on mouse out
                            to="/furniture"
                            as={Link}
                        >
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>3D Doors</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/chairs'>3D Skin Doors</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>Main Doors</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/cahirs'>Laminated Doors</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>2D Doors</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link className='navbar-bootstrap-custom-link' to='/aboutus'>Parqueting</Link></Nav.Link>
                        <NavDropdown
                            title="Furniture"
                            id="basic-nav-dropdown"
                            show={showFurnitureDropdown}
                            onMouseOver={() => setShowFurnitureDropdown(true)} // Show the dropdown on hover
                            onMouseOut={() => setShowFurnitureDropdown(false)} // Hide the dropdown on mouse out
                        >
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>Sofa</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/chairs'>Chair</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>Card Slider</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/cahirs'>Bed</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>Dining Table</Link></NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link><Link className='navbar-bootstrap-custom-link' to='/aboutus'>Chimney</Link></Nav.Link>
                        <NavDropdown
                            title="Solar"
                            id="basic-nav-dropdown"
                            show={showSolarDropdown}
                            onMouseOver={() => setShowSolarDropdown(true)} // Show the dropdown on hover
                            onMouseOut={() => setShowSolarDropdown(false)} // Hide the dropdown on mouse out
                        >
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>Link1</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/chairs'>Link2</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>Linl3</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/cahirs'>Link4</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='navbar-bootstrap-custom-link' to='/sofas'>Link5</Link></NavDropdown.Item>
                        </NavDropdown>
                        
                        <Nav.Link><Link className='navbar-bootstrap-custom-link' to='/blogs'>Blogs</Link></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
          
           
        </Navbar>
      
    );
}

export default NavbarBootstrap;
