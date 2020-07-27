/* Defines the product entity */
export interface User { 
  Id: string;
  UserName: string;
  Phone: string;
  Email: string;
  Role?: number;
  RoleDescription: string;
  CreateDate: string;
  IsActive: boolean;
}
