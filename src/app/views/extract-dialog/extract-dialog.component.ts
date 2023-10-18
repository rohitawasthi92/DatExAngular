import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ViewExtractService } from '../viewextracts/view-extract.service';

@Component({
  selector: 'app-extract-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, CommonModule],
  templateUrl: './extract-dialog.component.html',
  styleUrls: ['./extract-dialog.component.scss'],

})
export class ExtractDialogComponent implements OnInit {
  rowdata: any;
  action: string;

  extractForm: FormGroup = new FormGroup({})

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public dialogRef: MatDialogRef<ExtractDialogComponent>, private dataService: ViewExtractService) {
    this.rowdata = data.rowData;
    this.action = data.action;
  }

  ngOnInit(): void {
    if (this.isEditAction()) {
      console.log(this.rowdata);
      this.extractForm = this.fb.group({
        extractName: [this.rowdata.extractName],
        userName: [this.rowdata.createdBy],
        underlyingDataSet: [this.rowdata.underlyingDataSet],
        fileType: [this.rowdata.fileType],
        detsination: [this.rowdata.detsination],
        location: [this.rowdata.location]
      });
      }
  }

  isEditAction() {
    return this.action === 'edit';
  }

  onFormSubmit() {
    console.log(this.extractForm.value);
    this.dataService.updateExtract(this.extractForm.value).subscribe((res) => {
      console.log(res);
    })
    this.dialogRef.close();
  }

  onFormCancel() {
    this.dialogRef.close();
  }

  onDeleteClick() {
    // console.log(this.rowdata.extractName);
    this.dataService.deleteExtract(this.rowdata.extractName).subscribe((res) => {
      console.log(res);
    });
    this.dialogRef.close();
  }

}
