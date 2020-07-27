import { User } from './user';
import { Role } from './role';

export interface UserState {
    showUserCode: boolean;
    currentUser: User;
    users: User[];
    roles: Role[];
    error: string;
  }