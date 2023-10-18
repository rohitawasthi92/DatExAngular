import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, CommonModule],
  selector: 'app-subscription-dialog',
  templateUrl: './subscription-dialog.component.html',
  styleUrls: ['./subscription-dialog.component.scss']
})
export class SubscriptionDialogComponent implements OnInit {
  rowdata: any;
  action: string;

  subscriptionForm: FormGroup = new FormGroup({})

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public dialogRef: MatDialogRef<SubscriptionDialogComponent>, private http: HttpClient) {
    this.rowdata = data.rowData;
    this.action = data.action;
  }

  ngOnInit(): void {
    if (this.isEditAction()) {
      this.subscriptionForm = this.fb.group({
        createdby: [this.rowdata.createdby],
        endDate: [this.rowdata.endDate],
        extractName: [this.rowdata.extractName],
        frequency: [this.rowdata.frequency],
        startDate: [this.rowdata.startDate],
        subscriptionName: [this.rowdata.subsciptionName],
        scheduledTime: [this.rowdata.time]
      });
    }
  }

  isEditAction() {
    return this.action === 'edit';
  }

  onFormCancel() {
    this.dialogRef.close();
  }

  onFormSubmit() {
    this.http.put(`http://127.0.0.1:5000/updateSubscription`, this.subscriptionForm.value).subscribe((res) => {
      console.log(res);
    })
    this.dialogRef.close();
  }

  onDeleteClick() {
    this.http.delete(`http://127.0.0.1:5000/deleteSubscription/${this.rowdata.subsciptionName}`).subscribe((res) => {

    })
    this.dialogRef.close();
  }
}
