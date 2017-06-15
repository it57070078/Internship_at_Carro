import React from 'react';
import ReactDOM from 'react-dom';
 
// สร้าง component ที่จะใช้แสดงตัว comment
class DiscussionComment extends React.Component{
    render() {
        
        // รับข้อมูล comment ที่จะแสดงผ่านทาง props
        var comment = this.props.comment;
        return (
            <li>{comment.title}</li>
        );
    }
}
 
// สร้าง component ที่จะเอาไว้ทำ iteration
class DiscussionList extends React.Component {
    render() {
        
        // วนลูป array ของ comments ที่ได้มาจาก props 
        // แล้วส่งต่อให้ DiscussionComment นำไปแสดงผล
        var DiscussionComments = this.props.comments.map(function(data, index) {
            return (
                <DiscussionComment key={data.ID} comment={data} />
            );
        });
        return (
            <ul>
                {DiscussionComments}
            </ul>
        );
    }
};
 
export default DiscussionList