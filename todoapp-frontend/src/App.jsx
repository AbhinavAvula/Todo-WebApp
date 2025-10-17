import './App.css'
import { useEffect, useState } from 'react'
import Tasks from './components/Tasks.jsx'

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
    <div>
      <Tasks tasks={tasks} onTaskChange={fetchTasks} />
    </div>
  );
}

export default App;