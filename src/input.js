import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';

//input area ------------------------------------------------------------------
function InputArea(props){
  return(
    <div className="inputLine">
      <InputBox onChange={props.onChange}
                handleKeyPress={props.handleKeyPress}
                text = {props.text}/>
      <SelectPriority changePriority={props.changePriority}/>
      <AddTask onClick={props.onClick}/>
    </div>
  );
}

function InputBox(props){
  return(
    <input onChange={props.onChange}
    onKeyPress={props.handleKeyPress}
    value={props.text}/>
  );
}

function SelectPriority(props){
  return(
    <select defaultValue={'Choose priority'}
            onChange={props.changePriority}>
      <option disabled hidden>{'Choose priority'}</option>
      <option>{'High'}</option>
      <option>{'Medium'}</option>
      <option>{'Low'}</option>
    </select>
  );
}

function AddTask(props){
  return(
    <Button variant="contained" color="primary" onClick={props.onClick}>{'add'}</Button>
  );
}

export default InputArea;
