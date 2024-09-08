import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path={'/task-create'} element={CreateTask} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
