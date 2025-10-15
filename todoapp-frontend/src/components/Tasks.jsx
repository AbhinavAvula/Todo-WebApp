import React, { useEffect, useState } from "react";
import './Tasks.css'

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  const uniqueMonths = [...new Set(tasks.map((task) => task.month))];

  return (
    <div className="main-container">
      <div className="header">
        <h1 className="header-h1">Todo Manager</h1>
      </div>

      <main className="main-content">
        <div className="tasks-box">
          <h2 className="tasks-title">All Tasks</h2>

          {uniqueMonths.length === 0 && (
            <p className="no-tasks">No tasks found.</p>
          )}

          {uniqueMonths.map((month) => (
            <div key={month} className="month-section">
              <h3 className="month-title">{month}</h3>

              <table className="tasks-table">
                <thead>
                  <tr className="table-header-row">
                    <th className="table-header id-column">ID</th>
                    <th className="table-header">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks
                    .filter((task) => task.month === month)
                    .map((task) => (
                      <tr key={task.id} className="table-row">
                        <td className="table-cell">{task.id}</td>
                        <td className="table-cell">{task.description}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div className="button-group">
          <button className="btn btn-add">Add</button>
          <button className="btn btn-update">Update</button>
          <button className="btn btn-delete">Delete</button>
        </div>
      </main>
    </div>
  );
}