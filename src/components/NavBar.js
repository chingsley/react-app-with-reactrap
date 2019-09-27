import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Chingstudy</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/chingsley">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="https://chingsley-alphablog.herokuapp.com/">alpha-blog</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/components/">tech-uni</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://chingsley-ireporter-react.herokuapp.com/login">ireporter (With React)</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="https://chingsley.github.io/gh-pages/index.html">ireporter</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}