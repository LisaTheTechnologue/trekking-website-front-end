import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-destination',
  templateUrl: './post-destination.component.html',
  styleUrls: ['./post-destination.component.css']
})
export class PostDestinationComponent {
  destinationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.destinationForm = this.fb.group({
      city: [null, [Validators.required]]
    })
  }

  addDestination(): void {
    if (this.destinationForm.valid) {
      this.adminService.addDestination(this.destinationForm.value).subscribe(
        (res) => {
          if (res.id != null) {
            this.snackBar.open("Destination saved successfully.", 'Close', { duration: 5000 });
            this.router.navigateByUrl('/admin/dashboard');
          } else {
            this.snackBar.open(res.message, 'ERROR', { duration: 5000, panelClass: 'error-snackbar' });
          }
        })
    } else {
      this.destinationForm.markAllAsTouched();
    }
  }
}
