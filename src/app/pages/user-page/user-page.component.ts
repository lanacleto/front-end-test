import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/types/user.type';
import { UserMethodsService } from 'src/app/services/userMethods.service';
import { DatePipe } from '@angular/common';
import { parse } from 'date-fns';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  userId: number;
  user: User;
  initialBirthDate: string;
  initialEmail: string;

  verifyError: null | string = null;
  constructor(private route: ActivatedRoute, private userService: UserMethodsService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.searchUserById(this.userId);
    });
  }

  searchUserById(id: number) {
    this.userService.getById(id)
    .subscribe((data: any) => {
      this.initialBirthDate = data.birthDate;
      data.birthDate = this.datePipe.transform(data.birthDate, 'dd/MM/yyyy');
      data.createdAt = this.datePipe.transform(data.createdAt, 'dd/MM/yyyy   HH:mm');
      data.updatedAt = this.datePipe.transform(data.updatedAt, 'dd/MM/yyyy   HH:mm');
      this.user = data;
    });
  }

  backButton() {
    this.router.navigate(['/']);
  }

  deleteUser() {
    if(!window.confirm("Certeza que deseja deletar?")) return;
    this.userService.deleteUser(this.userId)
    .subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  saveUser(): any {
    const data: any = this.user;
    data.birthDate = this.convertToDate(this.initialBirthDate).toISOString();
    console.log(data.birthDate)
    delete data.id;
    delete data.createdAt;
    delete data.updatedAt;
    this.userService.updateUser(this.userId, data)
    .subscribe((data: any) => {
      console.log(data)
    });
  }

  convertToDate(originalDateString: string): Date {
    const [day, month, year] = originalDateString.split('/');
    const reversedDateString = `${month}/${day}/${year}`;
    const date = parse(reversedDateString, 'MM/dd/yyyy', new Date());  
    return date;
  }
  
}