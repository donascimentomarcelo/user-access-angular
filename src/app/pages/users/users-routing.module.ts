import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from 'src/app/resolvers/user.resolver';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      users: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
