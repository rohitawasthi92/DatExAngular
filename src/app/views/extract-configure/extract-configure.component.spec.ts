import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractConfigureComponent } from './extract-configure.component';

describe('ExtractConfigureComponent', () => {
  let component: ExtractConfigureComponent;
  let fixture: ComponentFixture<ExtractConfigureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtractConfigureComponent]
    });
    fixture = TestBed.createComponent(ExtractConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
