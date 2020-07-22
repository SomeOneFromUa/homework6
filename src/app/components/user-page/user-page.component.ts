import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
arr: number[];
  userForm: FormGroup;
  userId: FormControl = new FormControl('1');
  constructor(private userService: UserService, private router: Router) {
    this.arr = Array.from({ length: 10}, (v, k) => k + 1);
    this.userForm = new FormGroup({
      userId: this.userId
    });
  }
  ngOnInit(): void {
  }
  getUser(userForm: FormGroup): void {
    console.log(userForm.controls.userId.value);
    this.userService.getUser(userForm.controls.userId.value)
      .subscribe(value => this.router.navigate(['users', value.id], {state: value}));
  }
}
