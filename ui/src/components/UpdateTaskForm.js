import React, {useState} from 'react';
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/Check';
import axios from "axios";
import { API_URL } from '../utils';


export const UpdateTaskForm = ({fetchTasks, isDialogOpen, setIsDialogOpen, task}) => {
    const {id, completed} = task;
    const [taskName, setTaskName] = useState("");
    const handleUpdateTaskName = async () => {
        try {
            await axios.put(API_URL, {
                id,
                name: taskName, 
                completed,
            });

            await fetchTasks();
            setTaskName(" ")
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <Dialog open={isDialogOpen}>
        <div className="dialog">
            <TextField size="small" label="Task" variant="outlined" onChange={(e) => setTaskName(e.target.value)}>

            </TextField>
            <Button variant="contained" onClick={async () => {
                await handleUpdateTaskName();
                setIsDialogOpen(false);
            }}>
                <CheckCircleIcon/>
            </Button>
        </div>
    </Dialog>
  )
}
