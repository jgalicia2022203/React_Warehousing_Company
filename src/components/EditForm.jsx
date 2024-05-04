/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { formatISO, parseISO } from "date-fns";
import { useEffect, useState } from "react";
const EditTaskForm = ({ task, open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    creator_name: "",
    endDate: "",
  });

  useEffect(() => {
    if (open) {
      setFormData({
        name: task.name || "",
        description: task.description || "",
        creator_name: task.creator_name || "",
        endDate: task.endDate
          ? formatISO(parseISO(task.endDate), { representation: "date" })
          : "",
      });
    }
  }, [open, task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando estos datos al backend:", task._id, formData);
    onSave(task._id, formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: { backgroundColor: "#424242" },
      }}
    >
      <DialogTitle>Edit Task</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            name="name"
            label="Task Name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          <TextField
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          <TextField
            name="creator_name"
            label="Creator Name"
            value={formData.creator_name}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          <TextField
            name="endDate"
            label="End Date"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditTaskForm;
