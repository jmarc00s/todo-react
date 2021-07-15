import React from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskModel } from './models/TaskModel';
import { Container } from './styles';

import { useLocalStorage } from './hooks/useLocalStorage';


function App() {
  const [tasks, setTasks] = React.useState<TaskModel[]>([]);  
  const [getItem, setItem] = useLocalStorage('tasks');

  function handleOnCreate(task: TaskModel): void{
    setTasks([...tasks, task]);    
    setItem(JSON.stringify(tasks));
  }

  function handleTaskClick(id: number){    
    setTasks(tasks.map(task => {
      if(task.id === id)
        task.complete = !task.complete;
      return task;
    }));
    
    setItem(JSON.stringify(tasks));
  }

  React.useEffect(() => {    
    const tasks = getItem();
    console.log(tasks);
    if(tasks?.length)
      setTasks(JSON.parse(tasks));    
  }, [])

  return (
   <Container>  
      <TaskForm onCreate={handleOnCreate} />
      <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
   </Container>
  );
}

export default App;
