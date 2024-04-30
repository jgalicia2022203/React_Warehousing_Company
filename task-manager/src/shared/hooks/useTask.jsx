import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask as addTasksRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useTask = () => {
    const [isLoading, setIsLoading] = useState(false); 

    const navigate = useNavigate();

    const addTask = async (name, description, startDate, endDate, creator_name) => {
    setIsLoading(true);

    const response = await addTasksRequest({
        name,
        description,
        startDate,
        endDate,
        creator_name
    });
    
    setIsLoading(false);

    if (response.error) {
        return toast.error(
        response.e?.response?.data || 'There are problems saving the assignment'
        )
    }

    toast.success('Task saved successfully');
    navigate('/');
    }
    return{
        addTask,
        isLoading
    }
}

