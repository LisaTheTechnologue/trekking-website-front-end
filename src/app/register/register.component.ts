import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmpassword: [null, [Validators.required]],
    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const password = this.registerForm.get('password')?.value;
    const confirmpassword = this.registerForm.get('confirmpassword')?.value;

    if(password !== confirmpassword){
      this.snackBar.open('Passwords do not match.', 'Close', { duration: 5000, panelClass: 'error-snackbar' })
      return;
    }

    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
        this.snackBar.open('Register successful!', 'Close', { duration: 5000 });
        this.router.navigateByUrl("/login")
      },
      (error) => {
        // this.errorMessage = err.error.message;
        // this.isSignUpFailed = true;
        this.snackBar.open("Register failed. Please try again.", 'Close', { duration: 5000, panelClass: 'error-snackbar' });

      }
    );
  }
}