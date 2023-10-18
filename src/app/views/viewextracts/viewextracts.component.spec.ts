import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewextractsComponent } from './viewextracts.component';

describe('ViewextractsComponent', () => {
  let component: ViewextractsComponent;
  let fixture: ComponentFixture<ViewextractsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewextractsComponent]
    });
    fixture = TestBed.createComponent(ViewextractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
