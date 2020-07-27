import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';
import { UserApiActions, UserPageActions } from './actions/index'

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) { }

  loadUsers$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(UserPageActions.loadUsers),
        mergeMap(() => this.userService.getUsers()
          .pipe(
            map(users => UserApiActions.loadUsersSuccess({ users })),
            catchError(error => of(UserApiActions.loadUsersFailure({ error })))
          )
        )
      );
  });
  getCurrentUser$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(UserPageActions.getCurrentUser),
      concatMap(action =>
        this.userService.getUser(action.currentUserId)
          .pipe(
            map(currentUser => UserApiActions.GetUserSuccess({ currentUser })),
            catchError(error => of(UserApiActions.GetUserFailure({ error })))
          )
      )
    );
  });
  loadRoles$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(UserPageActions.loadRoles),
        mergeMap(() => this.userService.getRoles()
          .pipe(
            map(roles => UserApiActions.loadRolesSuccess({ roles })),
            catchError(error => of(UserApiActions.loadRolesFailure({ error })))
          )
        )
      );
  });
  searchUsers$ = createEffect(() => {
    return this.actions$
    .pipe(
      ofType(UserPageActions.searchUsers),
      concatMap(action =>
        this.userService.searchUsers(action.searchCriteria)
          .pipe(
            map(users => UserApiActions.searchUsersSuccess({ users })),
            catchError(error => of(UserApiActions.updateUserFailure({ error })))
          )
      )
    );
});
  updateUser$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(UserPageActions.updateUser),
        concatMap(action =>
          this.userService.updateUser(action.user)
            .pipe(
              map(user => UserApiActions.updateUserSuccess({ user })),
              catchError(error => of(UserApiActions.updateUserFailure({ error })))
            )
        )
      );
  });

  createUser$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(UserPageActions.createUser),
        concatMap(action =>
          this.userService.createUser(action.user)
            .pipe(
              map(user => UserApiActions.createUserSuccess({ user })),
              catchError(error => of(UserApiActions.createUserFailure({ error })))
            )
        )
      );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(UserPageActions.deleteUser),
        mergeMap(action =>
          this.userService.deleteUser(action.userId).pipe(
            map(() => UserApiActions.deleteUserSuccess({ userId: action.userId })),
            catchError(error => of(UserApiActions.deleteUserFailure({ error })))
          )
        )
      );
  });
}
