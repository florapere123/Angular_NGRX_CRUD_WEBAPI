import { User } from '../../user';
import { createAction, props } from '@ngrx/store';
import { SearchCriteria } from '../../searchCriteria';
 

export const toggleUserCode = createAction(
  '[User Page] Toggle User Code'
);
export const searchUsers = createAction(
  '[User Page] Search users',
  props<{ searchCriteria: SearchCriteria }>() 
);
export const getCurrentUser = createAction(
  '[User Page] Get Current User',
  props<{ currentUserId: string }>()
);

export const setCurrentUser = createAction(
  '[User Page] Set Current User',
  props<{ currentUserId: string }>()
);

export const clearCurrentUser = createAction(
  '[User Page] Clear Current User'
);

export const initializeCurrentUser = createAction(
  '[User Page] Initialize Current User'
);

export const loadUsers = createAction(
  '[User Page] Load'
);

export const loadRoles = createAction(
  '[User Page] Load roles'
);
export const updateUser = createAction(
  '[User Page] Update User',
  props<{ user: User }>()
);


export const createUser = createAction(
  '[User Page] Create User',
  props<{ user: User }>()
);


export const deleteUser = createAction(
  '[User Page] Delete User',
  props<{ userId: string }>()
);

