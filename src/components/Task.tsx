import React from 'react'
import styled from 'styled-components';
import { TaskModel } from '../models/TaskModel';


interface TaskProps{
    task: TaskModel,
    onClick: () => void;
}
  
const Content = styled.div<{ complete: boolean }>`
cursor: pointer;
width: 250px;
color: #fff;
height: 100px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ complete }) => complete ? '#5cb85c': '#d9534f'};
`;

const Task = ({task, onClick}: TaskProps) => <Content complete={task.complete} onClick={onClick}>{task.description}</Content>

export default Task;
