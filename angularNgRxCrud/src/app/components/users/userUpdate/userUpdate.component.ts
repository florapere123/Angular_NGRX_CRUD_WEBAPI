import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from '../user';
import { Role } from '../role';
import { ActivatedRoute, Router } from '@angular/router';
/* NgRx */
import { Store } from '@ngrx/store';
import { State,getUser,getRoles,getError } from '../state';
 
import { UserPageActions } from '../state/actions';

@Component({
  selector: 'app-user-edit',
  templateUrl: './userUpdate.component.html'
})
///
///user class that shows current user by id specified in url
///if no id is passed-passesd "0" than shows form for create user with defult values
///
export class UserUpdateComponent implements OnInit {
   pageTitle='edit';
   errorMessage = '';
   currentUserId:string="";
   currentUser$: Observable<User | null>;
   roles$: Observable<Role[]>;
   errorMessage$: Observable<string>;
  
   constructor(private store: Store<State>, private route: ActivatedRoute,
      private router: Router) {
 
     };

  ///if id passed in url is 0 then returns a new user instance from store
  //if id is !="0" than loads the specified user 
  //if no user was loadded shows error message
   ngOnInit(): void {
      this.currentUserId = this.route.snapshot.paramMap.get('id')
      if (this.currentUserId=="0"){
            this.store.dispatch(UserPageActions.initializeCurrentUser());
            this.currentUser$ = this.store.select(getUser);
        }
        else{
         this.store.dispatch(UserPageActions.getCurrentUser({currentUserId:this.currentUserId}));
         this.currentUser$ = this.store.select(getUser);
        }
    
      this.store.dispatch(UserPageActions.loadRoles());
      this.roles$ = this.store.select(getRoles);
      this.errorMessage$ = this.store.select(getError);
     
    }

  
 }
