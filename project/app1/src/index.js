import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './index.css';
import styles from './index.module.scss';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const name = '肖战';
const greet = <p>hello</p>;
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const jsx = <div className={styles.app}>
    <h1>啦啦啦~~~</h1>
    <h2>{name}</h2>
    <h3>{formatName({ firstName: '夏', lastName: '丽林' })}</h3>
    <div>{name ? name : '登录'}</div>
    <div>{name && '红红'}</div>
    <div>{name || '飒飒'}</div>
    <ul>
        {
            [11, 22, 33, 44, 55].map((item, index) => {
                return <li key={index}>{item}</li>
            })
        }
    </ul>
    {greet}
    {/* <img className="logo" alt="" src={logo} style={{width: '100px'}} /> */}
    <img className={styles.logo} alt="" src={logo} />
</div>;

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
