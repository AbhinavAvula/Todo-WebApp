function AddOp({ formData, setFormData, onTaskChange }) {
  const validMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
      const response = await fetch('http://localhost:8080/tasks', {
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
    <button onClick={handleAdd}>Add</button>
  );
}

export default AddOp;