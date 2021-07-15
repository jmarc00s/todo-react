import React from 'react';
import styled from 'styled-components';

import { TaskModel } from '../models/TaskModel';
import Task from '../components/Task';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 48px;
  gap: 8px;
  max-width: 90vw;
`;

interface TaskListProps {
    tasks: TaskModel[],
    onTaskClick: (id: string) => void;
}

const TaskList = ({ tasks, onTaskClick }: TaskListProps) => {    

    if(!tasks.length)
        return null;

    return <Section>
            {tasks.map(task => <Task key={task.id} onClick={() => onTaskClick(task.id)} task={task} />)}
        </Section>
}

export default TaskList;
