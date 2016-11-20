import React from 'react';

import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../styles.css';
import demoImage from '../images/known-demo-img.jpg';

export default class KnownDemo extends React.Component {
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
