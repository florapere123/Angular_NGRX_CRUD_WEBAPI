import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user';
import { Role } from '../role';
import {SearchCriteria} from '../searchCriteria';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './userList.component.html' 
})
///
///renders the users list by data received from its wrapper
///
export class UserListComponent {

  @Input() errorMessage: string;
  @Input() users: User[];
  @Input() roles: Role[];
  @Output() searchUsers = new EventEmitter<SearchCriteria>();
   searchCriteria:SearchCriteria = {
    UserName:null,
    RoleId:null
  };
  data: any;
  constructor() { 
 
}
   
  searchUsersClicked():void{
    let clonedSearchCriteria={...this.searchCriteria};
    if (clonedSearchCriteria!=null &&clonedSearchCriteria.RoleId!=null){
      clonedSearchCriteria={
        RoleId :Number(clonedSearchCriteria.RoleId),
        UserName:clonedSearchCriteria.UserName
      };
    }
       this.searchUsers.emit(clonedSearchCriteria);
  }
  

}
