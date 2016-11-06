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
import knownIcon from '../images/known_icon.png';
import mapImg from '../images/map.jpg';
import logo from '../images/organized_g0v.png';
import logoDark from '../images/g0v_logo_dark.png';
import cafePhiloLogo from '../images/organized_cafe_philo.png';

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
          <Row className={styles.pageTop}>
          	<Col md="4" md-offset="4">
          		<img src={knownIcon} className={styles.icon} />
          		<h3 className={styles.heading}> 已知回報 </h3>
          		<p className={styles.bodyText}>
                本頁為我們已收到的民眾通報清單，所有被舉報的網站都已收到由台灣人公共事務會 Formosan Association for Public Affairs 寄出的更改名稱要求，
                如果您願意為此運動盡一份力，請按“加入舉報”由您的個人信箱寄出抗議信，讓負責單位聽到更多台灣人的聲音。
              </p>
          	</Col>
          </Row>
          <Row>
          	<Col md="8" md-offset="2">
          		<div className={styles.greenDivider} />
          	</Col>
          </Row>
          <Row>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>總召</h3>
          			<p className={styles.bodyText}><a className={styles.linkDecorated} href="https://www.linkedin.com/in/yen-ting-liu-4121597b" target="_blank" >Edward Yen-Ting Liu</a>, <a className={styles.linkDecorated} href="https://www.linkedin.com/in/hsin-hsiao-1a43551b" target="_blank" >Hsin Hsiao</a> </p>
          		</div>
          	</Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>聯絡組</h3>
                <p className={styles.bodyText}>Yi Hsuan Hsu, Ting-An Lin, 阿肥, 章廣庭, 黃韻儒, Dealia Chen, Eva Tsai </p>
              </div>
            </Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>設計組</h3>
          			<p className={styles.bodyText}><a className={styles.linkDecorated} href="http://mengchih.com/" target="_blank" >Meng Chih Chiang</a>, Angel Chen, Tim Lee, <a className={styles.linkDecorated} href="https://www.linkedin.com/in/cjpdesign" target="_blank" >Chien-Ju Peng</a> </p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>公關組</h3>
          			<p className={styles.bodyText}>Alice Hung, Shun Wang, Iris Shih-Yin Chen, Lala Yao </p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>活動組</h3>
          			<p className={styles.bodyText}>Darren Yang, Jen-Po Cheng, Hsiao-Ya, Linda, Alice Chen, Kuo B</p>
          		</div>
          	</Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>募款組</h3>
          			<p className={styles.bodyText}>Jennifer Liu </p>
          		</div>
          	</Col>
            <Col md="8" md-offset="2">
              <div className={styles.staffCard}>
                <h3 className={styles.staffCardHeading}>會計組</h3>
                <p className={styles.bodyText}>王小倩, 郭安宜 </p>
              </div>
            </Col>
          	<Col md="8" md-offset="2">
          		<div className={styles.staffCard}>
          			<h3 className={styles.staffCardHeading}>場地組</h3>
          			<p className={styles.bodyText}>Yo-Chen Lin, Ching S Huang</p>
          		</div>
          	</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
