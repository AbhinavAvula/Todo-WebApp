import { useState } from 'react';
import './Amend.css';

function Amend({ onTaskChange }) {
  const [formData, setFormData] = useState({
    id: '',
    month: '',
    description: ''
  });

  const validMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = async () => {
    if (!validMonths.includes(formData.month)) {
      alert('Please enter a valid month (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)');
      return;
    }

    if (!formData.description.trim()) {
      alert('Please enter a description');
      return;
    }

    try {
      const response = await fetch('http://3.85.198.2:8080/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          month: formData.month,
          description: formData.description
        })
      });

      if (response.ok) {
        const newTask = await response.json();
        console.log('Task added successfully:', newTask);
        
        setFormData({
          id: '',
          month: '',
          description: ''
        });

        onTaskChange();
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="amend-container">
      <h3>Manage Tasks</h3>
      
      <div className="input-group">
        <label>ID: </label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Enter ID (for Update/Delete)"
        />
      </div>

      <div className="input-group">
        <label>Month: </label>
        <input
          type="text"
          name="month"
          value={formData.month}
          onChange={handleChange}
          placeholder="Enter month (Jan, Feb, Mar...)"
        />
      </div>

      <div className="input-group">
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
      </div>

      <div className="button-group">
        <button onClick={handleAdd}>Add</button>
        <button onClick={() => console.log('Update clicked')}>Update</button>
        <button onClick={() => console.log('Delete clicked')}>Delete</button>
      </div>
    </div>
  );
}

export default Amend;