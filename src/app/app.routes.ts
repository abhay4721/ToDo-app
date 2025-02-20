import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: TodoComponent, pathMatch: 'full' },
  { path: 'task', component: TodoComponent },
  {
            path:'home',
        component: TodoComponent,
        pathMatch:'full'
        },
        {
            path:'about',
        component: AboutComponent,
        pathMatch:'full'
        },
];
