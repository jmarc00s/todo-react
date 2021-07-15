import React, { FormEvent } from 'react';
import styled from 'styled-components';

import { Container } from './styles';

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

interface TaskProps{
  complete: boolean;
  onClick: () => void;
}

const Task = styled.div<TaskProps>`
  cursor: pointer;
  width: 250px;
  color: #fff;
  height: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.complete ? '#5cb85c': '#d9534f'};
  text-transform: capitalize;
`;

const TaskList = styled.section`
  display: flex;
  margin-top: 48px;
  gap: 8px;
`;

interface Task {
  id: number;
  description: string;
  complete: boolean;
}

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [taskInputValue, setTaskInputValue] = React.useState('');    

  function handleCreateClick(event: FormEvent){
    event.preventDefault();

    if(!taskInputValue.length)  return;

    const newTask: Task = {
      id: parseInt((Math.random() * 10000).toString(), 10),
      description: taskInputValue,
      complete: false
    };

    setTasks([...tasks, newTask]);
    setTaskInputValue('');
  }

  function handleTaskClick(id: number){    
    setTasks(tasks.map(task => {
      if(task.id === id)
        task.complete = !task.complete;
      return task;
    }));
  }

  return (
   <Container>     
      <TaskLabel>Insira uma tarefa</TaskLabel>
      <TaskInputForm onSubmit={handleCreateClick}>
        <TaskInput autoComplete="off" id="task-input" placeholder="Fazer o jantar..." value={taskInputValue} onChange={({target}) => setTaskInputValue(target.value)} />
        <TaskButton >Criar</TaskButton>
      </TaskInputForm>
      <TaskList>
        {tasks.map(task => <Task onClick={() => handleTaskClick(task.id)} complete={task.complete} key={task.id}>{task.description}</Task>)}
      </TaskList>
   </Container>
  );
}

export default App;
