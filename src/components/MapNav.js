import React from 'react'
import {Collapse,
        Navbar,
        NavbarBrand,
        NavbarToggler,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem } from 'reactstrap';

class MapNav extends React.Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      clickCount: 0
    };
  }

  click(){
    this.setState({
      clickCount: this.state.clickCount+1
    })
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
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar tabs>
              <NavItem>
                <NavLink href="/new" active>Permits With Coming Design Reviews</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/permits/landuse">Land Use</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/permits/building">Building</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/permits/electrical">Electrical</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/permits/trade">Trade</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MapNav;
