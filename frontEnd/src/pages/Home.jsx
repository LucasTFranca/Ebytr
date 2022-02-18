import React from 'react';
import { Paper } from '@mui/material';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

function Home() {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        background: '#141825',
        borderRadius: '8px',
        width: '50%',
      }}
      elevation={3}
    >
      <TaskInput />
      <TaskList />
    </Paper>
  );
}

export default Home;
