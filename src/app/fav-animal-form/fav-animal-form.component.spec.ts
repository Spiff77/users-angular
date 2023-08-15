import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavAnimalFormComponent } from './fav-animal-form.component';

describe('FavAnimalFormComponent', () => {
  let component: FavAnimalFormComponent;
  let fixture: ComponentFixture<FavAnimalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavAnimalFormComponent]
    });
    fixture = TestBed.createComponent(FavAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
