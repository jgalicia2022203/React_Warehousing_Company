/* eslint-disable react/prop-types */
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import { useState } from "react";
import EditTaskForm from "./EditForm";
const TaskRow = ({ task, onComplete, onEdit }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveChanges = (taskId, updatedTaskData) => {
    onEdit(taskId, updatedTaskData);
    handleCloseEditModal();
  };

  const handleComplete = () => {
    onComplete(task._id);
  };

  return (
    <TableRow>
      <TableCell>{task.name}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell>{task.creator_name}</TableCell>
      <TableCell>{task.endDate}</TableCell>
      <TableCell>
        <Tooltip title="Complete Task">
          <IconButton onClick={handleComplete} aria-label="complete">
            <CheckCircleIcon
              style={{ color: task.status === "complete" ? "green" : "gray" }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit Task">
          <IconButton onClick={handleOpenEditModal} aria-label="edit">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <EditTaskForm
          task={task}
          open={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveChanges}
        />
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;
