import React from 'react';
import ReactDOM from 'react-dom';
import DiscussionForm from './DiscussionForm.jsx';
import DiscussionList from '/DiscussionList.jsx';
 
// สร้าง component แม่
class DiscussionApp extends React.Component {
// กำหนด allMessages ให้เป็น state ที่มีค่าเริ่มต้นเป็น array เปล่าๆ
    getInitialState(){
        return {
            allMessages: []
        };
    }
 
    // สร้าง method สำหรับเซฟ comment
    _addComment(message) {
        
        // สร้าง unique id ขึ้นมา
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        
        // เตรียม object ของ comment ที่จะเซฟ
        var newMessage = [{
            'ID': id,
            'title': message
        }];
 
        // รวม comment ใหม่ เข้ากับ comment ที่มีอยู่เดิม
        this.setState({
            allMessages: newMessage.concat(this.state.allMessages)
        });
    }
    
    // ส่ง method สำหรับเซฟ comment ไปให้ DiscussionForm ผ่าน props
    // assign ข้อมูล comment ทั้งหมด ให้ DiscussionList นำไปแสดงผล
    render(){
        return (
            <div>
                <DiscussionForm handleSubmit={this._addComment}  />
                <DiscussionList comments={this.state.allMessages} />
            </div>
        );
    }
}