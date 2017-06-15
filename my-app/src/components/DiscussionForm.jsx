import React from 'react';
import ReactDOM from 'react-dom';
 
class DiscussionForm extends React.Component{
  // กำหนด message ให้เป็น state ที่มีค่าเริ่มต้นเป็นค่าว่าง
    getInitialState() {
        return {
            message: ''
        };
    }
 
    // เมื่อ user พิมพ์ comment ให้อัพเดท message 
    // ให้เป็นค่าเดียวกับที่ user พิมพ์มา
    _onChange(event) {
        this.setState({
            message: event.target.value
        });
    }
 
    // เมื่อฟอร์มถูก submit ให้เซฟค่า message ที่อยู่ใน state 
    // โดยใช้ method ที่ได้รับมาจาก props ที่ชื่อ handleSubmit
    _onSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.message);
 
        // จากนั้นก็ reset ค่า message ให้เป็นค่าว่างเหมือนเดิม
        this.setState({
            message: ''
        });
    }
 
    // ผูก event ต่างๆ เข้ากับ element
    // พร้อมกับกำหนด value ของช่องกรอก comment ให้มีค่าตาม message
    render() {
        return (
            <form onSubmit={this._onSubmit}>
                <input type="text" 
                    placeholder="Enter message here..." 
                    onChange={this._onChange}
                    value={this.state.message}
                />
                <button onClick={this._onSubmit}>Comment</button>
            </form>
        );
    }
}

export default DiscussionForm