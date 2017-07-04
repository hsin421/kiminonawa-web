import React from 'react';

import Col from 'muicss/lib/react/col';
import styles from '../styles.css';
import Divider from 'muicss/lib/react/divider';

export default class Case extends React.Component {
  render() {
    return (
      <Col md="8" md-offset="2">
        <h2 className={styles.staffCardHeading}>{this.props.situation}</h2>
        <div className={styles.bodyText}>
          <a className={styles.linkDecorated} href={this.props.url} target="_blank" ><img src={this.props.imgUrl} width={300} /></a>
          <p>Reported by:{this.props.user}</p>
        </div>
        <Divider />
      </Col>
    );
  }
}
