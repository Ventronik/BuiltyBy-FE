import React from 'react';
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
      activeButton: 'Permits'
    };
  }

  setActiveButton(buttonName, cb) {
    this.setState({activeButton: buttonName});
    cb()
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg context-nav" fixed="top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto justify-content-end">
              <li className={`nav-item ${this.state.activeButton ===  'Permits' ? 'active' : null}`}>
                <a className="nav-link" href="#" onClick={()=>this.setActiveButton('Permits', this.props.designReviewMarkers)}>Permits With Coming Design Reviews <span class="sr-only">(current)</span></a>
              </li>
              <li className={`nav-item ${this.state.activeButton ===  'Landuse' ? 'active' : null}`}>
                <a className="nav-link" href="#" onClick={()=>this.setActiveButton('Landuse', this.props.landUseMarkers)}>Land Use</a>
              </li>
              <li className={`nav-item ${this.state.activeButton ===  'Building' ? 'active' : null}`}>
                <a className="nav-link" href="#" onClick={()=>this.setActiveButton('Building', this.props.buildingMarkers)}>Building</a>
              </li>
              <li className={`nav-item ${this.state.activeButton ===  'Electrical' ? 'active' : null}`}>
                <a className="nav-link" href="#" onClick={()=>this.setActiveButton('Electrical', this.props.electricalPermitsMarkers)}>Electrical</a>
              </li>
              <li className={`nav-item ${this.state.activeButton ===  'Trade' ? 'active' : null}`}>
                <a className="nav-link" href="#" onClick={()=>this.setActiveButton('Trade', this.props.tradeMarkers)}>Trade</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default MapNav;
