import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: '', component: TodoComponent, pathMatch: 'full' },
  { path: 'task', component: TodoComponent }
];
