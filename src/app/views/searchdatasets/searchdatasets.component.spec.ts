import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdatasetsComponent } from './searchdatasets.component';

describe('SearchdatasetsComponent', () => {
  let component: SearchdatasetsComponent;
  let fixture: ComponentFixture<SearchdatasetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchdatasetsComponent]
    });
    fixture = TestBed.createComponent(SearchdatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
