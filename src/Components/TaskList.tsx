import React from 'react';
import styled from 'styled-components';
import { TaskModel } from '../models/TaskModel';

const Section = styled.section`
  display: flex;
  margin-top: 48px;
  gap: 8px;
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

interface TaskListProps {
    tasks: TaskModel[],
    onTaskClick: (id: number) => void;
}


const TaskList = ({ tasks, onTaskClick }: TaskListProps) => {    

    if(!tasks.length)
        return null;

    return (
        <Section>
            {tasks.map(task => <Task key={task.id} onClick={() => onTaskClick(task.id)} complete={task.complete}>{task.description}</Task>)}
        </Section>
    )
}

export default TaskList
