import { Container, Grid, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";
import {
  completeTask,
  createTask,
  fetchTasks,
  updateTask,
  deleteTask,
} from "../services/api";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const initFetch = async () => {
      const fetchedTasks = await fetchTasks(enqueueSnackbar);
      setTasks(fetchedTasks);
    };
    initFetch();
  }, []);

  const handleAddTask = async (newTask) => {
    const taskData = {
      name: newTask.name,
      description: newTask.description,
      endDate: newTask.endDate,
      creator_name: newTask.creatorName,
    };
    try {
      const newTaskResponse = await createTask(taskData, enqueueSnackbar);
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTaskResponse.tasks];
        return updatedTasks;
      });
    } catch (error) {
      console.error("Error al añadir la tarea:", error);
    }
  };

  const handleEditTask = async (taskId, taskDetails) => {
    try {
      console.log({taskId, taskDetails})
      const response = await updateTask(taskId, taskDetails, enqueueSnackbar);
      const updatedTask = response.updatedTask;
      console.log("Tarea actualizada recibida del backend:", updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? updatedTask : task))
      );
    } catch (error) {
      console.error("Error al editar la tarea:", error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      const response = await completeTask(taskId, enqueueSnackbar);
      const updatedTask = response.task;
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? updatedTask : task))
      );
    } catch (error) {
      console.error("Error al completar la tarea:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId, enqueueSnackbar);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom></Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TaskForm addTask={handleAddTask} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TaskTable
            tasks={tasks}
            onEdit={handleEditTask}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
