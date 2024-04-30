import { useState } from "react";
import toast from "react-hot-toast";
import { getTasks as getTasksRequest } from "../../services";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const taskData = await getTasksRequest();


        if (taskData.error){
            return toast.error(
                taskData.e.response.data || "An error was generated while generating the tasks"
            );
        }
        setTasks(taskData.data);

        return taskData.data
    }
}