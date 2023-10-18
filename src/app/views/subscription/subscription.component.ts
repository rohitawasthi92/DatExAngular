import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../searchdatasets/data.service';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  createSubscriptionData = {};
  createSubsData = {};

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      frequency: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', [Validators.required, Validators.minLength(6)]],
      time: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onCreateSubscription() {
    this.createSubscriptionData = {
      extractName: this.dataService.extractDetails['extractName'],
      userName: this.dataService.extractDetails['userName'],
      ...this.form.value,
    };
    if (this.dataService.viewExtractsSubs) {
      this.createSubsData = {
        extractName: this.dataService.viewExtractsSubs['extractName'],
        userName: this.dataService.viewExtractsSubs['createdBy'],
        ...this.form.value,
      };
      this.dataService
      .postcreateSubscription(this.createSubsData)
      .subscribe((res: any) => {
        console.log(res);
      });
      return;
    }
    this.dataService
      .postcreateSubscription(this.createSubscriptionData)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
  }
}
