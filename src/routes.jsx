import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* HomePage incluirá TaskForm y TaskTable */}
        <Route path="/tasks" element={<TaskTable />} />
        <Route path="/create" element={<TaskForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
