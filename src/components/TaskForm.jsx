/* eslint-disable react/prop-types */
import { Box, Button, TextField } from "@mui/material";
import React from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = React.useState({
    name: "",
    description: "",
    creatorName: "",
    endDate: "",
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    setTask({ name: "", description: "", creatorName: "", endDate: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
    >
      <TextField
        name="name"
        label="Task Name"
        value={task.name}
        onChange={handleChange}
        required
        InputLabelProps={{
          required: false,
        }}
      />
      <TextField
        name="description"
        label="Description"
        value={task.description}
        onChange={handleChange}
        required
        InputLabelProps={{
          required: false,
        }}
      />
      <TextField
        name="creatorName"
        label="Creator Name"
        value={task.creatorName}
        onChange={handleChange}
        required
        InputLabelProps={{
          required: false,
        }}
      />
      <TextField
        name="endDate"
        label="End Date"
        type="date"
        value={task.endDate}
        onChange={handleChange}
        required
        InputLabelProps={{
          required: false,
          shrink: true,
        }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Create Task
      </Button>
    </Box>
  );
};

export default TaskForm;
