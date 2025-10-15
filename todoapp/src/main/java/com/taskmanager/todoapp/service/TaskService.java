package com.taskmanager.todoapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.taskmanager.todoapp.model.Task;
import com.taskmanager.todoapp.repository.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found with id:"+id));

        task.setDescription(taskDetails.getDescription());
        task.setMonth(taskDetails.getMonth());

        return taskRepository.save(task);
    }

    public Task createTask(Task taskDetails){
        return taskRepository.save(taskDetails);
    }

    public void deleteTask(Long id){
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found with id:"+id));

        taskRepository.delete(task);
    }
}
