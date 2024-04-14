import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquatersComponent } from './headquaters.component';

describe('HeadquatersComponent', () => {
  let component: HeadquatersComponent;
  let fixture: ComponentFixture<HeadquatersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadquatersComponent]
    });
    fixture = TestBed.createComponent(HeadquatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
