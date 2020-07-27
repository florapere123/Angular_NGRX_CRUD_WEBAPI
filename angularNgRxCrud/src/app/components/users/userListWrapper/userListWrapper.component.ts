import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../interfaces/user';
import { Store } from '@ngrx/store';
import {   getUsers, getRoles,getError } from '../../../store';

import { UserPageActions } from '../../../store/actions';
import { Role } from '../../../interfaces/role';
import { SearchCriteria } from'../../../interfaces/searchCriteria';
import {UserState} from '../../../interfaces/userState';
@Component({
  templateUrl: './userListWrapper.component.html'
})
///
///shows list of users details
///option search users by roleid and username
///loads initial help data like users,roles,and etc
///
export class UserListWrapper implements OnInit {
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;
  users$: Observable<User[]>;
  roles$: Observable<Role[]>;
 
  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.dispatch(UserPageActions.loadUsers());
    this.users$ = this.store.select(getUsers);
    this.store.dispatch(UserPageActions.loadRoles());
    this.roles$ = this.store.select(getRoles);
    this.errorMessage$ = this.store.select(getError);
  }

  searchUsers(searchCriteriaInput:SearchCriteria): void {  
    this.store.dispatch(UserPageActions.searchUsers({ searchCriteria: searchCriteriaInput })); 
  } 

}
