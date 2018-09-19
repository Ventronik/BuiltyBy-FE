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

class TopNav extends React.Component{
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
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar  id="topnav" expand="md">
          <NavbarBrand id="brand" onClick={this.click} ><h1>BuiltBy</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="toplink" href="/components/">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="toplink" href="">LogIn</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle id="toplink" nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem id="toplink">
                    Option 1
                  </DropdownItem>
                  <DropdownItem id="toplink">
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem id="toplink">
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default TopNav;
