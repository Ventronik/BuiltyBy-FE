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
      <div className="justify-content-end">
        {/* <Navbar className='mapNav' light expand="md">
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar tabs>
              <NavItem>
                <NavLink href="/new">Permits With Coming Design Reviews</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>this.props.landUseMarkers()}>Land Use</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>this.props.buildingMarkers()}>Building</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>this.props.electricalPermitsMarkers()}>Electrical</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>this.props.tradeMarkers()}>Trade</NavLink>
              </NavItem>
            </Nav>
        </Navbar> */}

        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="#">Permits With Coming Design Reviews <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.props.landUseMarkers()}>Land Use</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.props.buildingMarkers()}>Building</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.props.electricalPermitsMarkers()}>Electrical</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.props.tradeMarkers()}>Trade</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default MapNav;
