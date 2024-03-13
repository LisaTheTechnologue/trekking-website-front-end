import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips/trips.service';

@Component({
  selector: 'app-post-trip',
  templateUrl: './post-trip.component.html',
  styleUrls: ['./post-trip.component.css']
})
export class PostTripComponent {

  tripForm!: FormGroup;
  listOfDestinations: any = [];
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private tripsService: TripsService,
    private router: Router) { }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }
  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  ngOnInit(): void {
    this.tripForm = this.fb.group({
      destinationId: [null, [Validators.required]]
    });

    this.getAllDestinations();
  }
  getAllDestinations() {
    this.tripsService.getAllTrips().subscribe(res=>{
      this.listOfDestinations = res;
    }
      )
  }

  addTrip(): void {
    if (this.tripForm.valid) {
      const formData: FormData = new FormData();
      
      formData.append('img', this.selectedFile);
      formData.append('destinationId', this.tripForm.get('destinationId').value);

      this.tripsService.addTrip(this.tripForm.value).subscribe(
        (res) => {
          if (res.id != null) {
            this.snackBar.open("Trip saved successfully.", 'Close', { duration: 5000 });
            this.router.navigateByUrl('/trips');
          } else {
            this.snackBar.open(res.message, 'ERROR', { duration: 5000, panelClass: 'error-snackbar' });
          }
        })
    } else {
      for(const i in this.tripForm.controls) {
        this.tripForm.controls[i].markAsDirty();
        this.tripForm.controls[i].updateValueAndValidity();
        
      }
    }
  }
}
