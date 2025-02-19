import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true, // Confirming it's a standalone component
  imports: [CommonModule, FormsModule, RouterModule], // Import necessary modules
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';
  todoList: { id: number; task: string; completed: boolean }[] = [];

  // Method to add a new task
  addTask() {
    if (this.newTask.trim()) {
      this.todoList.push({
        id: Date.now(),
        task: this.newTask,
        completed: false
      });
      this.newTask = ''; // Clear the input field
    }
  }

  // Method to toggle task completion status
  toggleCompleted(index: number) {
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  // Method to delete a task by ID
  deleteTask(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }
}
