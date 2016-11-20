import React from 'react';
import axios from 'axios';

import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router';

import Case from './Case';
import styles from '../styles.css';
import knownIcon from '../images/known_icon.png';

// sample data
const sampleData = [  
   {  
      "_id":"57d77205e2f4ec0e00304cea",
      "caseId":"1473737221646",
      "count":1,
      "organization":"Rutgers University ",
      "organizationEmail":null,
      "situation":"International student orientation: Trip to philly",
      "userName":"Shih-Yen Lin",
      "userEmail":"suntop.lin@gmail.com",
      "__v":0,
      "date":"2016-09-13T03:27:01.590Z",
      "status":"init",
      "url":"",
      "imgUrl":"https://ucarecdn.com/ca398641-4236-4481-962a-c9b0fd7e99e4/"
   },
   {  
      "_id":"581e89988ea2550e0014b5ed",
      "caseId":"1462835747800",
      "count":1,
      "organization":"ICIJ (國際調查記者聯盟)",
      "organizationEmail":"https://www.icij.org/email/node/190/field_email",
      "situation":"巴拿馬文件->以國家搜尋",
      "__v":0,
      "date":"2016-11-06T01:38:32.222Z",
      "status":"init",
      "url":"https://offshoreleaks.icij.org/",
      "imgUrl":"https://ucarecdn.com/aac30e04-9405-4f08-8e79-1d99808d26c5/"
   }
];

export default class Known extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/topics')
      .then(response => {
        this.setState({data: response.data});
    });
  }

  _getCases() {
    const {data} = this.state;
    const records = data && !!data.length ?
      data : sampleData;

    return records.map(record => (
        <Case situation={record.situation} 
          url={record.url} 
          imgUrl={record.imgUrl} 
          key={record._id} />
    ));
  }

  render() {
    const cases = this._getCases();

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
          	{cases}
          </Row>
        </Container>
      </div>
    );
  }
}
