import React from 'react';
import axios from 'axios';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';

import styles from '../styles.css';
import taiwanIcon from '../images/taiwan_icon.png';
import mapImg from '../images/map.jpg';
import logo from '../images/organized_g0v.png';
import logoDark from '../images/g0v_logo_dark.png';
import cafePhiloLogo from '../images/organized_cafe_philo.png';

import demoImage from '../images/success-demo-img.jpg';

export default class Staff extends React.Component {
  constructor(props) {
    super(props);

    this.sate = {
      items: []
    };
  }

  componentDidMount() {
    console.log('mount');
    axios.get('http://localhost:3000/todos')
      .then(response => {
        console.log(response.data);
        // this.setState({});
    });
  }

  render() {
    return (
      <div>
        <Container className={styles.pageBody}>
          <Row>
          	<Col md="12">
          		<img src={demoImage} className={styles.fullWidthImage} />
          	</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
