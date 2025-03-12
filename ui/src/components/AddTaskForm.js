import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from "axios";
import { API_URL } from '../utils';

export const AddTaskForm = ({ fetchTasks}) => {
    const [newTask, setNewTask] = useState("");
    const addNewTask = async () => {
        try {
            await axios.post(API_URL, {
                name: newTask,
                completed: false,
            });

            await fetchTasks(); 
            setNewTask(" ");
        } catch (err) {
            console.log(err);
        }
    };
    return (
    <div>
        <Typography align="center" variant="h2" paddingTop={2} paddingBottom={2} > My Task List </Typography>
        <div className="addTaskForm">
            <TextField size="small" label="Task" variant="outlined" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <Button disabled={!newTask.length} variant="outlined" onClick={addNewTask}>
                <AddCircleIcon/>
            </Button>
        </div>
        
    </div>
    )
    }
