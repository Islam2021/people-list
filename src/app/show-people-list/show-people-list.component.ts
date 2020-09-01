import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-people-list',
  templateUrl: './show-people-list.component.html',
  styleUrls: ['./show-people-list.component.scss']
})
export class ShowPeopleListComponent implements OnInit {
  user:any
  constructor(private userServ: UserService, private activateRouter: ActivatedRoute  ) { }

  ngOnInit() {
    let userID = this.activateRouter.snapshot.params.id;


    this.userServ.getOneUserList(userID).subscribe(res => {
      this.user = res;
      console.log(this.user.firstname);
      
    }, error => {
      console.log(error);
    })
  }

}
