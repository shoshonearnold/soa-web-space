import { ComponentFixture, TestBed } from '@angular/core/testing';

import { headquartersComponent } from './headquarters.component';

describe('headquartersComponent', () => {
  let component: headquartersComponent;
  let fixture: ComponentFixture<headquartersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [headquartersComponent],
    });
    fixture = TestBed.createComponent(headquartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
