import './App.css'
import { useEffect, useState } from 'react'
import Tasks from './components/Tasks.jsx'
import Amend from './components/Amend.jsx'

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch("http://localhost:8080/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="main-container">
      <div className="header">
        <h1 className="header-h1">Todo Manager</h1>
      </div>

      <main className="main-content">
        <Tasks tasks={tasks} />
        <Amend onTaskChange={fetchTasks} />
      </main>
    </div>
  );
}

export default App;