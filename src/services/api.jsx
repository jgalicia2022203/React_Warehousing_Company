/* eslint-disable no-unused-vars */
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8080/warehouse/v1",
  timeout: 1000,
});

const handleError = (error, enqueueSnackbar) => {
  const message = error.response?.data?.msg || "Network error";
  if (enqueueSnackbar) {
    enqueueSnackbar(message, { variant: "error" });
  } else {
    console.error("enqueueSnackbar is not defined. Error message:", message);
  }
  throw new Error(message);
};

export const createTask = async (data, enqueueSnackbar) => {
  try {
    const response = await apiClient.post("/tasks", data);
    enqueueSnackbar("Task created successfully!", { variant: "success" });
    return response.data;
  } catch (e) {
    handleError(e, enqueueSnackbar);
  }
};

export const fetchTasks = async (enqueueSnackbar) => {
  try {
    const response = await apiClient.get(`/tasks`);
    return response.data.tasks;
  } catch (e) {
    handleError(e, enqueueSnackbar);
  }
};

export const updateTask = async (taskId, data, enqueueSnackbar) => {
  try {
    const response = await apiClient.put(`/tasks/${taskId}`, data);
    enqueueSnackbar("Task updated successfully!", { variant: "success" });
    return response.data;
  } catch (e) {
    handleError(e, enqueueSnackbar);
  }
};

export const completeTask = async (taskId, enqueueSnackbar) => {
  try {
    const response = await apiClient.patch(`/tasks/${taskId}`, {
      status: "complete",
    });
    enqueueSnackbar("Task status updated!", { variant: "success" });
    return response.data;
  } catch (e) {
    handleError(e, enqueueSnackbar);
  }
};

export const deleteTask = async (taskId, enqueueSnackbar) => {
  try {
    await apiClient.delete(`/tasks/${taskId}`);
    enqueueSnackbar("Task deleted successfully!", { variant: "success" });
  } catch (e) {
    handleError(e, enqueueSnackbar);
  }
};
