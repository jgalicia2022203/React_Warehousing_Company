/* eslint-disable react/prop-types */
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TaskRow from "./TaskRow";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: "transparent",
  borderColor: theme.palette.common.white,
  borderStyle: "solid",
  borderWidth: "1px",
  "& .MuiTableCell-root": {
    borderColor: theme.palette.common.white,
  },
  "& .MuiTableCell-head": {
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
}));

const TaskTable = ({ tasks, onEdit, onDelete, onComplete }) => {
  return (
    <StyledTableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Creator Name</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TaskRow
              key={task._id}
              task={task}
              onEdit={(_, taskDetails) => onEdit(task._id, taskDetails)}
              onDelete={() => onDelete(task._id)}
              onComplete={() => onComplete(task._id)}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TaskTable;
