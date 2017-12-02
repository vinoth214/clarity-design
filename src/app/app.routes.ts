import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { UserListComponent } from './user-list/user-list.component'



export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing',  component: UserListComponent } ,
  { path: 'detail',component:CardDetailComponent}
];