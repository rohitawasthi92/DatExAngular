import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubscriptionsComponent } from './viewsubscriptions.component';

describe('ViewsubscriptionsComponent', () => {
  let component: ViewsubscriptionsComponent;
  let fixture: ComponentFixture<ViewsubscriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsubscriptionsComponent]
    });
    fixture = TestBed.createComponent(ViewsubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
