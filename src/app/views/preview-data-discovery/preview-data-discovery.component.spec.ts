import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDataDiscoveryComponent } from './preview-data-discovery.component';

describe('PreviewDataDiscoveryComponent', () => {
  let component: PreviewDataDiscoveryComponent;
  let fixture: ComponentFixture<PreviewDataDiscoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewDataDiscoveryComponent]
    });
    fixture = TestBed.createComponent(PreviewDataDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
