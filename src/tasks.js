import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';

//task list --------------------------------------------------------------------
function TaskList(props){
  const taskArray = Object.values(props.taskArray);
  taskArray.sort(compare);
  const taskRows = taskArray.map((task) =>
    <Task key={task.taskID}
          onDelete={props.onDelete}
          task={task}
          changeStatus={props.changeStatus}
          changeTaskPriority={props.changeTaskPriority}/>
  );

  return(
    <div>
      <table>
        <tbody>
          <ColumnName />
          {taskRows}
        </tbody>
      </table>
    </div>
  );
}

function ColumnName(props){
  return(
    <tr>
      <td>{'Task'}</td>
      <td>{'Priority'}</td>
      <td>{'Status'}</td>
    </tr>
  );
}

function Task(props){
  var priority;
  switch(props.task.taskPriority){
    case 1:
      priority = 'High';
      break;
    case 2:
      priority = 'Medium';
      break;
    case 3:
      priority = 'Low';
      break;
    default:
      priority = 1;
  }

  return(
    <tr>
      <td className="taskName">{props.task.taskName}</td>
      <td>
        <select defaultValue={priority}
                onChange={props.changeTaskPriority}
                taskid={props.task.taskID}>
          <option>{'High'}</option>
          <option>{'Medium'}</option>
          <option>{'Low'}</option>
        </select>
      </td>
      <td>
        {props.task.taskCompleted ? "Complete" : "Incomplete"}
      </td>
      <td>
        <Button variant="contained" color="primary" onClick={props.changeStatus} value={props.task.taskID}>
          {props.task.taskCompleted ? "Reset" : "Finish"}
        </Button>
      </td>
      <td>
        <Button variant="contained" color="secondary" onClick={props.onDelete} value={props.task.taskID}>
          {'X'}
        </Button>
      </td>
    </tr>
  );
}

function compare(a, b){
  if (a.taskPriority > b.taskPriority){
    return 1;
  }
  if(a.taskPriority < b.taskPriority){
    return -1;
  }
  return 0;
}

export default TaskList;
