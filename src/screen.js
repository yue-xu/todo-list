import React from 'react';
import './index.css';
import InputArea from './input.js';
import TaskList from './tasks.js';

//state control ----------------------------------------------------------------
class Screen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tasks:{},
      inputText:'',
      selectedPriority:1,
      idCounter:0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.changePriority = this.changePriority.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.changeTaskPriority = this.changeTaskPriority.bind(this);
  }

  handleClick(e){
    let taskTable = this.state.tasks;
    let id = this.state.idCounter;
    let newTask = {
      taskID:id,
      taskName: this.state.inputText,
      taskPriority: this.state.selectedPriority,
      taskCompleted: false
    }
    taskTable[id] = newTask;

    this.setState({
      tasks: taskTable,
      inputText:'',
      idCounter:this.state.idCounter+1,
    });
  }

  handleChange(e){
    this.setState({
      inputText: e.target.value,
    });
  }

  deleteTask(e){
    let taskTable = this.state.tasks;
    let i = e.currentTarget.value;
    delete taskTable[i];
    this.setState({
      tasks:taskTable
    });
  }

  changePriority(e){
    var priority;
    switch(e.target.value){
      case 'High':
        priority = 1;
        break;
      case 'Medium':
        priority = 2;
        break;
      case 'Low':
        priority = 3;
        break;
      default:
        priority = 1;
    }

    this.setState({
      selectedPriority:priority,
    });
  }

  changeTaskPriority(e){
    let taskTable = this.state.tasks;
    let i = e.target.attributes.getNamedItem('taskid').value;
    var priority;
    switch(e.target.value){
      case 'High':
        priority = 1;
        break;
      case 'Medium':
        priority = 2;
        break;
      case 'Low':
        priority = 3;
        break;
      default:
        priority = 1;
    }

    taskTable[i].taskPriority = priority;
    this.setState({
      tasks:taskTable,
    })
  }

  changeStatus(e){
    let taskTable = this.state.tasks;
    let i = e.currentTarget.value;
    taskTable[i].taskCompleted = !taskTable[i].taskCompleted;
    this.setState({
      tasks:taskTable
    });
  }

  handleKeyPress(e){
    if (e.key === 'Enter'){
      this.handleClick(e);
    }
  }

  render(){
    return(
      <div className='screen'>
        <div className='title'>
          <h1>{'To do list'}</h1>
        </div>

        <div className='addTask'>
          <InputArea onClick = {this.handleClick}
          onChange = {this.handleChange}
          changePriority = {this.changePriority}
          handleKeyPress = {this.handleKeyPress}
          text = {this.state.inputText}/>
        </div>

        <div className='taskList'>
          <TaskList taskArray={this.state.tasks}
          onDelete = {this.deleteTask}
          changeStatus = {this.changeStatus}
          changeTaskPriority = {this.changeTaskPriority}/>
        </div>
      </div>
    );
  }
}

export default Screen;
