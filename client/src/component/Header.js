import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const HeaderStyle = {
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  position: "fixed",
  left: "0",
  top: "0",
  height: "60px",
  width: "100%"
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={HeaderStyle}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">View Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/emmaodia/enterpair-api">GitHub</NavLink>
            </NavItem>
          </Nav>
          <Button color="secondary">Creat Project</Button>
          {/* <NavbarText>Creat Project</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
