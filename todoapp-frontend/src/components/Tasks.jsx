import React from "react";
import './Tasks.css'

export default function Tasks({ tasks }) {
  const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const uniqueMonths = [...new Set(tasks.map((task) => task.month))];
  
  const sortedMonths = uniqueMonths.sort((a, b) => {
    return monthOrder.indexOf(a) - monthOrder.indexOf(b);
  });

  return (
    <div className="tasks-box">
      <h2 className="tasks-title">All Tasks</h2>

      {sortedMonths.length === 0 && (
        <p className="no-tasks">No tasks found.</p>
      )}

      {sortedMonths.map((month) => (
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
  );
}