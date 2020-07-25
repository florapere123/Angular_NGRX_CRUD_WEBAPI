import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Store } from '@ngrx/store';
import { State,  getUsers, getRoles,getError } from '../state';
import { UserPageActions } from '../state/actions';
import { Role } from '../role';
import { SearchCriteria } from '../searchCriteria';

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
 
  constructor(private store: Store<State>) { }

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
