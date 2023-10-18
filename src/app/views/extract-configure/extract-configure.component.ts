import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from './account.service';
import { DataService } from '../searchdatasets/data.service';
@Component({
  selector: 'app-extract-configure',
  templateUrl: './extract-configure.component.html',
  styleUrls: ['./extract-configure.component.scss'],
})
export class ExtractConfigureComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  extractgroup = {};
  fileNameArray= []
  fileName = ""
  name = "";
  runExtractVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      fileName: ['', Validators.required],
      extractName: ['', Validators.required],
      fileType: ['', Validators.required],
      storageName: ['', [Validators.required, Validators.minLength(6)]],
      relativePath: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
  }

  createExtract() {
    this.runExtractVisible = true;
    this.extractgroup = {
      attributealtDesc: this.dataService.selectedRowDesc,
      attributeName: this.dataService.selectedRowNames,
      datasetName: this.dataService.selectedDataSet['dataset_name'],
      userName: this.dataService.selectedDataSet['owner'],
      ...this.form.value,
    };
    this.dataService.extractDetails = this.extractgroup;
    this.dataService.postcreateExtract(this.extractgroup).subscribe((res:any) => {
      console.log(res);
    })
  }

  runExtract() {
    console.log(this.form.value['extractName']);

    this.accountService
      .postRunExtract(this.form.value['extractName'])
      .subscribe((res) => {
        console.log(res);
      });
  }

  subscription() {
    this.router.navigate(['/subscription']);
  }
}
