import React from "react";
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
} from "reactstrap";
import cn from "classnames";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/devvfloww-color-logo.svg";

export default class Navi extends React.Component {
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
      // <div>DO YOUR THING HERE!</div>

      <div className={cn([styles.top])}>
        <Navbar className={cn([styles.nav_style])} dark expand="md">
          <NavbarBrand className={cn(["ml-5"], ["mt-3"], ["mb-0"], ["pt-0"])}>
            <Link className="text-center ml-3" to="/">
              <img className={cn([styles.nav_logo])} src={logo} />
              <a href="/landing">
                <p className={cn([styles.nav_brand], "navbar-brand")}>
                  BUIDL
                  <span className={cn([styles.nav_brand_span])}>Hub</span>
                </p>
              </a>
            </Link>
          </NavbarBrand>
          <NavbarToggler className="mr-3" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-5" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    className={cn([styles.nav_link])}
                    href="/components/"
                    to="/services"
                  >
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={cn([styles.nav_collapse_style])}>
                  <Link className={cn([styles.nav_link])} to="/">
                    Blog
                  </Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className={cn([styles.nav_link])} nav caret>
                  Tools
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/tools/eventflow">
                      {/* <FontAwesomeIcon
                                                icon={faUserCircle}
                                            /> */}
                      EventFlow
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/">
                      {/* <FontAwesomeIcon
                                                className={cn(
                                                    [styles.nav_about_link],
                                                    [styles.nav_about_link_portfolio]
                                                )}
                                                icon={faMap}
                                            /> */}
                      BlockExplorer
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className={cn([styles.nav_link])} nav caret>
                  Solutions
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/">
                      {/* <FontAwesomeIcon
                                                icon={faUserCircle}
                                            /> */}
                      Supply Chain
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/">
                      {/* <FontAwesomeIcon
                                                className={cn(
                                                    [styles.nav_about_link],
                                                    [styles.nav_about_link_portfolio]
                                                )}
                                                icon={faMap}
                                            /> */}
                      License Management
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink>
                  <Link>
                    <button>Get Started</button>
                    {/* <Button className={cn([styles.nav_button])}>
                      Get Started
                    </Button> */}
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
