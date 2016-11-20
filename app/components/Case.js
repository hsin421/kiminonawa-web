import React from 'react';

import Col from 'muicss/lib/react/col';
import styles from '../styles.css';

export default class Case extends React.Component {
  render() {
    return (
      <Col md="8" md-offset="2">
        <h2 className={styles.staffCardHeading}>{this.props.situation}</h2>
        <div className={styles.bodyText}>
          <img src={this.props.imgUrl} />
          <a className={styles.linkDecorated} href={this.props.url} target="_blank" >{this.props.url}</a>
        </div>
      </Col>
    );
  }
}