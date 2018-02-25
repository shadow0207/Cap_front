import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../user";
import {ActivatedRoute, Router} from '@angular/router';
 
 
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UserService]
})
export class UserCreateComponent implements OnInit, OnDestroy {
 
  id: number;
  user: User;
 
  userForm: FormGroup;
 
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }
 
  ngOnInit() {
 
    this.userForm = new FormGroup({
      uid: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
 
  }
 
  ngOnDestroy(): void {
  }
 
  onSubmit() {
    if (this.userForm.valid) {
 
        let user: User = new User(this.userForm.controls['uid'].value,
        this.userForm.controls['username'].value,
        this.userForm.controls['firstName'].value,
        this.userForm.controls['lastName'].value,
        this.userForm.controls['password'].value,
        this.userForm.controls['gender'].value,
        this.userForm.controls['status'].value,
        this.userForm.controls['description'].value,
        this.userForm.controls['address'].value,
        this.userForm.controls['email'].value);
        
        this.userService.saveUser(user).subscribe();
 
     }
      this.userForm.reset();
      this.router.navigate(['/user']);
  }
 
  redirectUserPage() {
    this.router.navigate(['/user']);
 
  }
}