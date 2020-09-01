import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getAllUsersUrl = "https://backend-people-crud-app.herokuapp.com/users";
  private getOneUserUrl = "https://backend-people-crud-app.herokuapp.com/users/";
  private deleteUserUrl = "https://backend-people-crud-app.herokuapp.com/users/";
  private addUserUrl = "https://backend-people-crud-app.herokuapp.com/users/add";
  private updateUserUrl = "https://backend-people-crud-app.herokuapp.com/users/update";
  private registerUserUrl="https://backend-people-crud-app.herokuapp.com/users/register";
  private loginUserUrl="https://backend-people-crud-app.herokuapp.com/users/login";

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get<any>(this.getAllUsersUrl)
  }

  getOneUser(id: string) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  getOneUserList(id: string) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  deleteUser(id: string) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }

  addUser(user:User){
    return this.http.post<any>(this.addUserUrl, user)
  }

  updateUser(user:User) {
    return this.http.put<any>(this.updateUserUrl, user)
  }

  registerAdmin(user:User) {
    return this.http.post<any>(this.registerUserUrl, user)
  }

  loginForm(user: User) {
    return this.http.post<any>(this.loginUserUrl, user)
  }

  LoggedIn() {
    let token = localStorage.getItem("myToken");
    console.log(token);
    
    if(token) {
      return true
    } else {
      return false
    }
  }
}
