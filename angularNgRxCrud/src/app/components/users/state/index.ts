import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as AppState from  '../../../state/app.state'
import { UserState } from './user.reducer';

export interface State  
  {
  usrers: UserState;
}


const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getShowUserCode = createSelector(
  getUserFeatureState,
  state => state.showUserCode
);
export const searchUsers = createSelector(
  getUserFeatureState,
  state => state.users
);
 
export const getUsers = createSelector(
  getUserFeatureState,
  state => state.users
);
export const getUser  = createSelector(
  getUserFeatureState,
  state => state.currentUser 
);
export const getRoles = createSelector(
  getUserFeatureState,
  state => state.roles
);
export const getError = createSelector(
  getUserFeatureState,
  state => state.error
);
