var React = require('react');
var ReactDOM = require('react-dom');
 
// โหลด component หลักมา
var DiscussionApp = require('./components/DiscussionApp.jsx');
 
// แสดงผล component หลัก ที่ #app
ReactDOM.render(<DiscussionApp /> , 
document.getElementById('app'));
