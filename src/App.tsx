import React from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import { TaskModel } from './models/TaskModel';

import { Container } from './styles';


function App() {
  const [tasks, setTasks] = React.useState<TaskModel[]>([]);  

  function handleOnCreate(task: TaskModel): void{
    setTasks([...tasks, task]);
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
      <TaskForm onCreate={handleOnCreate} />
      <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
   </Container>
  );
}

export default App;
