import { User } from '../user';
import { Role } from '../role';
import { UserApiActions, UserPageActions } from  './actions/index';
import { createReducer, on } from '@ngrx/store';

export interface UserState {
  showUserCode: boolean;
  currentUser: User;
  users: User[];
  roles: Role[];
  error: string;
}
export interface RolesState {
   
  roles: Role[];
  error: string;
}
const initialState: UserState = {
  showUserCode: true,
  currentUser: null,
  users: [],
  roles:[],
  error: ''
};
const initialStateNewUser: User  = {
  Id: "",
  UserName: "",
  Phone: "",
  Email:"",
  Role: null,
  RoleDescription: "", 
  CreateDate: null,
  IsActive: true
};
export const userReducer = createReducer<UserState>(
  initialState,
 
 
  on(UserPageActions.clearCurrentUser, (state): UserState => {
    return {
      ...state,
      currentUser:initialStateNewUser 
    };
  }),
  on(UserPageActions.initializeCurrentUser, (state): UserState => {
     return {
      ...state,
      currentUser:initialStateNewUser
  }
  }),
  on(UserApiActions.loadUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      users: action.users,
      error: ''
    };
  }),
  on(UserApiActions.loadUsersFailure, (state, action): UserState => {
    return {
      ...state,
      users: [],
      error: action.error
    };
  }),
  on(UserApiActions.GetUserSuccess, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.currentUser,
      error: ''
    };
  }),
  on(UserApiActions.GetUserFailure, (state, action): UserState => {
    return {
      ...state,
      currentUser: null,
      error: action.error
    };
  }),
  on(UserApiActions.searchUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      users: action.users,
      error: ''
    };
  }),
  on(UserApiActions.searchUsersFailure, (state, action): UserState => {
    return {
      ...state,
      users: [],
      error: action.error
    };
  }),

  on(UserApiActions.loadRolesSuccess, (state, action): UserState => {
    return {
      ...state,
      roles: action.roles,
      error: ''
    };
  }),
  
  on(UserApiActions.loadRolesFailure, (state, action): UserState => {
    return {
      ...state,
      roles: [],
      error: action.error
    };
  }),
  on(UserApiActions.updateUserSuccess, (state, action): UserState => {
    const updatedUsers = state.users.map(
      item => action.user.Id === item.Id ? action.user : item);
    return {
      ...state,
      users: updatedUsers,
      currentUser: action.user,
      error: ''
    };
  }),
  on(UserApiActions.updateUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error
    };
  }),
   on(UserApiActions.createUserSuccess, (state, action): UserState => {
    return {
      ...state,
      users: [...state.users, action.user],
      currentUser: action.user ,
      error: ''
    };
  }),
  on(UserApiActions.createUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a delete, the currentUser is null.
  on(UserApiActions.deleteUserSuccess, (state, action): UserState => {
    return {
      ...state,
      users: state.users.filter(user => user.Id !== action.userId),
      currentUser: null,
      error: ''
    };
  }),
  on(UserApiActions.deleteUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error
    };
  })
);
