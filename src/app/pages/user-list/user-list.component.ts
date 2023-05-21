import { Component, OnInit } from '@angular/core';
import { UserMethodsService } from 'src/app/services/userMethods.service';
import { DatePipe } from '@angular/common';
import { User } from 'src/app/types/user.type';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  totalPages = 1;
  currentPage = 1;

  constructor(private userService: UserMethodsService, private datePipe: DatePipe) {

  }

  ngOnInit(): void {
    this.userService.getUsers(1)
    .subscribe((data: any) => {
      data.results.forEach((dataUser: any) => {
        dataUser.birthDate = this.datePipe.transform(dataUser.birthDate, 'dd/MM/yyyy');
        this.users.push(dataUser);
      });
      this.totalPages = Math.ceil(data.count / data.limit);
      this.currentPage = Number(data.page);
    });
  }

  changePage(pageNum: number) {
    this.users = []
    this.userService.getUsers(pageNum)
    .subscribe((data: any) => {
      data.results.forEach((dataUser: any) => {
        dataUser.birthDate = this.datePipe.transform(dataUser.birthDate, 'dd/MM/yyyy');
        this.users.push(dataUser);
      });
      this.totalPages = Math.ceil(data.count / data.limit);
      this.currentPage = Number(data.page);
    });
  }
}
