import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractDialogComponent } from './extract-dialog.component';

describe('ExtractDialogComponent', () => {
  let component: ExtractDialogComponent;
  let fixture: ComponentFixture<ExtractDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtractDialogComponent]
    });
    fixture = TestBed.createComponent(ExtractDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
