function DeleteOp({ formData, setFormData, onTaskChange }) {
  const handleDelete = async () => {
    // Validation: Check if ID is provided
    if (!formData.id.trim()) {
      alert('Please enter a task ID to delete');
      return;
    }

    // Confirmation before deleting
    const confirmed = window.confirm(`Are you sure you want to delete task with ID: ${formData.id}?`);
    
    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/tasks/${formData.id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Task deleted successfully');
        
        setFormData({
          id: '',
          month: '',
          description: ''
        });

        onTaskChange();
      } else {
        alert('Failed to delete task. Please check if the ID exists.');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Error deleting task. Please try again.');
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteOp;