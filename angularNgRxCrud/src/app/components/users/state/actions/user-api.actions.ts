import { User } from '../../user';
import { createAction, props } from '@ngrx/store';
import { Role } from '../../role';

export const loadUsersSuccess = createAction(
    '[User API] Load Success',
    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    '[User API] Load Fail',
    props<{ error: string }>()
);

export const GetUserSuccess = createAction(
    '[User API] Get User Success',
    props<{ currentUser: User }>()
);

export const GetUserFailure = createAction(
    '[User API] Get User  Fail',
    props<{ error: string }>()
);

export const searchUsersSuccess = createAction(
    '[User API]Search Users Success',
    props<{ users: User[] }>()
);

export const searchUsersFailure = createAction(
    '[User API] Search Users Fail',
    props<{ error: string }>()
);



export const loadRolesSuccess = createAction(
    '[User API] Load Roles Success',
    props<{ roles: Role[] }>()
);

export const loadRolesFailure = createAction(
    '[User API] Load Roles Fail',
    props<{ error: string }>()
);


export const updateUserSuccess = createAction(
    '[User API] Update User Success',
    props<{ user: User }>()
);

export const updateUserFailure = createAction(
    '[User API] Update User Fail',
    props<{ error: string }>()
);

export const createUserSuccess = createAction(
    '[User API] Create User Success',
    props<{ user: User }>()
);

export const createUserFailure = createAction(
    '[User API] Create User Fail',
    props<{ error: string }>()
);

export const deleteUserSuccess = createAction(
    '[User API] Delete User Success',
    props<{ userId: string }>()
);

export const deleteUserFailure = createAction(
    '[User API] Delete User Fail',
    props<{ error: string }>()
);
