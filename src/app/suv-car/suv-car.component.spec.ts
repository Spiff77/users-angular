import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvCarComponent } from './suv-car.component';

describe('SuvCarComponent', () => {
  let component: SuvCarComponent;
  let fixture: ComponentFixture<SuvCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuvCarComponent]
    });
    fixture = TestBed.createComponent(SuvCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
