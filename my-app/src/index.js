import React from 'react';
import ReactDOM from 'react-dom';


class Total extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInput(e){
        this.setState({value: e.target.value});
    }
    handleSubmit(e){
        alert('A name was submitted: ' + this.state.value);
        // alear('Add Complete ' + this.state.value);
        e.preventDefault();
    }
    // handleDelete(e){

    // }
        render(){
            return(
                <div>
                    <header />
                    {/*<AddTask />*/}
                </div>
            )
        }
}


class header extends React.Component {
    render(){
        return (
            <div className="container">
            <p className="text-center">
                <p align="left">
                    <nav className="navbar navbar-default">
                        <a className="navbar-brand">
                            Task List
                        </a>
                    </nav>
                </p>
            </p>
        </div>
        )
    }
}



// function Header () {
//     return (
//         <div className="container">
//             <p className="text-center">
//                 <p align="left">
//                     <nav className="navbar navbar-default">
//                         <a className="navbar-brand">
//                             Task List
//                         </a>
//                     </nav>
//                 </p>
//             </p>
//         </div>
//     );
// }

// function AddTask (){
//     return (
//             <div className="panel panel-info">
//                 <div className="panel-body">
//                     <form onSubmit={this.handleSubmit}>
//                         <div className="form-group">
//                             <label>Task</label>
//                                 <input type="text" name="name" placeholder="Input Text" value={this.state.value} onInput={this.handleInput} />
//                         </div>
//                         <div className="form-group">
//                             <div className="col-sm-offset-3 col-sm-6">
//                                 <p align="right">
//                                     <button onClick={this.handleSubmit.bind(this)} className="btn btn-success active">
//                                         <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
//                                         Add Task
//                                     </button>
//                                 </p>
//                             </div>    
//                         </div>
//                     </form>
//                 </div>
//             </div>
//     )
// }


// class AddForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};

//         this.handleInput = this.handleInput.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInput(e){
//         this.setState({value: e.target.value});
//     }
//     handleSubmit(e){
//         // alear('Add Complete ' + this.state.value);
//         e.preventDefault();
//     }
    
//     render() {
//         return (
//             <div className="panel panel-info">
//                 <div className="panel-body">
//                     <form onSubmit={this.handleSubmit}>
//                         <div className="form-group">
//                             <label>Task</label>
//                                 <input type="text" name="name" placeholder="Input Text" value={this.state.value} onInput={this.handleInput} />
//                         </div>
//                         <div className="form-group">
//                             <div className="col-sm-offset-3 col-sm-6">
//                                 <p align="right">
//                                     <button onClick={this.handleSubmit.bind(this)} className="btn btn-success active">
//                                         <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
//                                         Add Task
//                                     </button>
//                                 </p>
//                             </div>    
//                         </div>
//                     </form>
//                 </div>
//             </div>
            
//         );
//     }
// }



// var Task = [{

// }]

ReactDOM.render(
    <Total />,
  document.getElementById('root')
);
