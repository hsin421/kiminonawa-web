import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';
import Button from 'muicss/lib/react/button';
import styles from '../styles.css';
import logo from '../images/NameIsTaiwan_logo.png';
import logoDark from '../images/g0v_logo_dark.png';
import socialFacebook from '../images/icon_facebook_green.png';
import socialEmail from '../images/icon_email_green.png';
import socialGithub from '../images/icon_github_green.png';
import LandingCH from './LandingCH';
import Container from 'muicss/lib/react/container';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

export default class ChPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleHamburgerClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
  	const { children } = this.props;

    let s1 = {verticalAlign: 'middle'};
    return (
      <div>
        <Appbar className={styles.bar}>
          <div className={styles.headerContainer}>
            <Row>
              <Col md="2">
                <Link to="/">
                  <img src={logo} className={styles.appBarLogo}/>
                </Link>
                <span
                  className={styles.hamburger}
                  onClick={this.handleHamburgerClick}
                >
                  ☰
                </span>
              </Col>
              <Col md="5" className={styles.appBarNav}>
                <Link to="/known" className={styles.navLink} activeClassName={styles.navLinkSelected}>已知回報</Link>
                <Link to="/success" className={styles.navLink} activeClassName={styles.navLinkSelected}>成功案例</Link>
              </Col>
              <Col md="5" className={styles.appBarExtra}>
                <a href="https://www.eventbrite.com/e/g0v-hackathon-nyc-tickets-27621197746"
                    target="_blank">
                  <Button color="primary" className={styles.navButton}>網頁回報</Button>
                </a>
                <a href="https://www.generosity.com/volunteer-fundraising/g0v-at-nyc-first-ever-hackathon"
                  target="_blank">
                  <Button color="accent" className={styles.navButton}>下載Chrome Extension</Button>
                </a>
              </Col>
            </Row>
          </div>
        </Appbar>
        {
          this.state.showMenu &&
          <ul className={styles.dropDownUl}>
            <li className={styles.headerItemResponsive}><Link to="/" onClick={this.handleHamburgerClick}>首頁</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/known" onClick={this.handleHamburgerClick}>已知回報</Link> </li>
            <li className={styles.headerItemResponsive}><Link to="/success" onClick={this.handleHamburgerClick}>成功案例</Link> </li>
            <li className={styles.headerItemResponsive}>
              <a className={styles.socialIcon} href="https://www.facebook.com/g0vus/" target="_blank"><img src={socialFacebook} /></a>
              <a className={styles.socialIcon} href="https://github.com/hsin421/g0vnyc-landing" target="_blank"><img src={socialGithub} /></a>
            </li>
          </ul>
        }
       	{children}
          <Appbar className={styles.footer}>
             <Container>
              <Row>
                <Col md="12">
                  <p className={styles.copyrightText}>&copy; 2016 台灣正名. All Rights Reserved.</p>
                </Col>
              </Row>
            </Container>
          </Appbar>
      </div>
    );
  }
}
