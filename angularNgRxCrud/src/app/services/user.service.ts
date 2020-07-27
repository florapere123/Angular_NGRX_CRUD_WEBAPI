import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { API_URL_USERS,API_URL_ROLES } from '../Config';
import { User } from '../interfaces/user'
import { Role } from '../interfaces/role';
import { SearchCriteria } from '../interfaces/searchCriteria';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL_USERS)
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }
  
  getUser(currentUserId:string): Observable<User> {
    return this.http.get<User>(API_URL_USERS+"/"+currentUserId)
      .pipe(
        tap(data => data
         ),
        catchError(this.handleError)
      );
  }
  
  searchUsers(searchCriteria:SearchCriteria): Observable<User[]> { 
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User[]>(API_URL_USERS+"/GetUsersBySeacrhCriterias",searchCriteria,{headers})
      .pipe(
        tap(data =>data),
        catchError(this.handleError)
      );
  }
  getRoles(): Observable<Role[]> {
       return this.http.get<Role[]>(API_URL_ROLES)
    .pipe(
      tap(data =>data
       //  console.log(JSON.stringify(data))
         ),
      catchError(this.handleError)
    );
      
  }
  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // User Id must be null for the Web API to assign an Id
    const newUser = { ...user, Id: null };
    return this.http.post<User>(API_URL_USERS, newUser, { headers })
      .pipe(
        tap(data => console.log('add user: ' + JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  deleteUser(id: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${API_URL_USERS}/${id}`;
    return this.http.delete<User>(url, { headers })
      .pipe(
        tap(data => console.log('deleteUser: ' + id)),
        catchError(this.handleError)
      );
  }

  updateUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${API_URL_USERS}/${user.Id}`;
    return this.http.put<User>(url, user, { headers })
      .pipe(
        tap(() => console.log('updateUser: ' + user.Id)),
        // Returns the user on an update
        map(() => user),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) { 
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
