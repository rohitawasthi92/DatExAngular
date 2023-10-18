import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerybuilderComponent } from './querybuilder.component';

describe('QuerybuilderComponent', () => {
  let component: QuerybuilderComponent;
  let fixture: ComponentFixture<QuerybuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuerybuilderComponent]
    });
    fixture = TestBed.createComponent(QuerybuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
