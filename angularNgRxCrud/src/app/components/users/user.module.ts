import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListWrapper } from './userListWrapper/userListWrapper.component';
import { UserListComponent } from './userList/userList.component';
import { UserUpdateComponent } from './UserUpdate/userUpdate.component';
 
/* NgRx */
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../../store/user.effects';
import { SharedModule } from '../../shared/shared.module';
import { PageNotFoundComponent } from '../shared/page-not-found.component';
  
 
const userRoutes: Routes = [
  { path: '', component: UserListWrapper },
  { path: 'UserList', component: UserListWrapper , pathMatch: 'full'},
  { path: 'UserUpdate/:id', component: UserUpdateComponent , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    SharedModule, 
    RouterModule.forRoot(userRoutes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [
    UserListWrapper,
    UserListComponent,
    UserUpdateComponent
  ]
})
export class UserModule { }
