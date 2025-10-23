import { useState } from 'react';
import './Amend.css';
import AddOp from './AddOp';
import UpdateOp from './UpdateOp';
import DeleteOp from './DeleteOp';

function Amend({ onTaskChange }) {
  const [formData, setFormData] = useState({
    id: '',
    month: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
        <AddOp 
          formData={formData} 
          setFormData={setFormData} 
          onTaskChange={onTaskChange} 
        />
        <UpdateOp 
          formData={formData} 
          setFormData={setFormData} 
          onTaskChange={onTaskChange} 
        />
        <DeleteOp 
          formData={formData} 
          setFormData={setFormData} 
          onTaskChange={onTaskChange} 
        />
      </div>
    </div>
  );
}

export default Amend;