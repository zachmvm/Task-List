import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/Check';
import axios from "axios";
import { API_URL } from '../utils';

export const UpdateTaskForm = ({ fetchTasks, isDialogOpen, setIsDialogOpen, task }) => {
    const { id, completed, name } = task;
    const [taskName, setTaskName] = useState(name || "");

    const handleUpdateTaskName = async () => {
        try {
            await axios.put(API_URL, { id, name: taskName, completed });
            await fetchTasks();
            setTaskName("");
        } catch (err) {
            console.error("Error updating task:", err);
        }
    };

    return (
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
            <div className="dialog">
                <TextField
                    size="small"
                    label="Task"
                    variant="outlined"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={async () => {
                        await handleUpdateTaskName();
                        setIsDialogOpen(false);
                    }}
                >
                    <CheckCircleIcon />
                </Button>
            </div>
        </Dialog>
    );
};
