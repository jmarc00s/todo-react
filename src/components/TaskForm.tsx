import React, { FormEvent } from 'react'
import styled from 'styled-components';
import { TaskModel } from '../models/TaskModel';

const TaskInputForm = styled.form`
  display: flex;
`;

const TaskInput = styled.input`
  width: 400px;
  border-top-left-radius: 4px;
  border-bottom-left-radius:4px;
  padding: 4px 16px;  
  outline: none;
  font-size: 1rem;
  border: 1px solid #333;  
`;

const TaskLabel = styled.label`
  padding: 8px 0;
  color: #333;
  font-size: 1.25rem;
  font-weight: bold;
`;

const TaskButton = styled.button`
  color: #fff;
  background-color: 	#333;
  padding: 16px 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: none;
  border: none;
  width: 100px;
  cursor: pointer;
`;

interface TaskProps {
  onCreate: (task: TaskModel) => void;
}

const TaskForm = ({onCreate}: TaskProps) => {

    const [taskInputValue, setTaskInputValue] = React.useState(''); 

    function handleCreateClick(event: FormEvent){
      event.preventDefault();
      if(!taskInputValue.length)  return;
      
      const newTask: TaskModel = {
        id: parseInt((Math.random() * 10000).toString(), 10),
        description: taskInputValue,
        complete: false
      };

      onCreate(newTask);
      setTaskInputValue('');
    }

    return (
        <>
        <TaskLabel>Insira uma tarefa</TaskLabel>
        <TaskInputForm onSubmit={handleCreateClick}>
          <TaskInput maxLength={40} autoComplete="off" id="task-input" placeholder="Fazer o jantar..." value={taskInputValue} onChange={({target}) => setTaskInputValue(target.value)} />
          <TaskButton>Criar</TaskButton>
        </TaskInputForm>
        </>
    )
}

export default TaskForm;
