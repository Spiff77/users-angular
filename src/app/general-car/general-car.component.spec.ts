import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCarComponent } from './general-car.component';

describe('GeneralCarComponent', () => {
  let component: GeneralCarComponent;
  let fixture: ComponentFixture<GeneralCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralCarComponent]
    });
    fixture = TestBed.createComponent(GeneralCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
