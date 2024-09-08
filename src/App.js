import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateTask from "./components/CreateTask";
import TaskNotification from "./components/TaskNotification";

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/task-create" element={<CreateTask />} />
          <Route path={'/task-notifications'} element={<TaskNotification/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
