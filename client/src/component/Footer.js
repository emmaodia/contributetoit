import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart, faCopyright } from '@fortawesome/free-solid-svg-icons'


const element = <FontAwesomeIcon icon={faHandHoldingHeart} />
const copyright = <FontAwesomeIcon icon={faCopyright} />

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="center">
        <NavItem>
            <NavLink href="https://fb.com/groups/devclagos" target="_blank">Made with {element} by DevC Lagos Community</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">{copyright} 2020</NavLink>
        </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;
