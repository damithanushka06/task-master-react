import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateTask from "./components/CreateTask";
import TaskNotification from "./components/TaskNotification";
import Parent from "./components/Parent";

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path={''} element={<Parent/>}></Route>
          <Route path="/task-create" element={<CreateTask />} />
          <Route path={'/task-notifications'} element={<TaskNotification/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
