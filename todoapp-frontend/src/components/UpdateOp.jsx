function UpdateOp({ formData, setFormData, onTaskChange }) {
  const validMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const handleUpdate = async () => {
    // Validation: Check if ID is provided
    if (!formData.id.trim()) {
      alert('Please enter a task ID to update');
      return;
    }

    // Validation: Check if month is valid
    if (!validMonths.includes(formData.month)) {
      alert('Please enter a valid month (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)');
      return;
    }

    // Validation: Check if description is provided
    if (!formData.description.trim()) {
      alert('Please enter a description');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/tasks/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          month: formData.month,
          description: formData.description
        })
      });

      if (response.ok) {
        const updatedTask = await response.json();
        console.log('Task updated successfully:', updatedTask);
        
        setFormData({
          id: '',
          month: '',
          description: ''
        });

        onTaskChange();
      } else {
        alert('Failed to update task. Please check if the ID exists.');
      }
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Error updating task. Please try again.');
    }
  };

  return (
    <button onClick={handleUpdate}>Update</button>
  );
}

export default UpdateOp;