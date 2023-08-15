import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFavDialogComponent } from './animal-fav-dialog.component';

describe('AnimalFavDialogComponent', () => {
  let component: AnimalFavDialogComponent;
  let fixture: ComponentFixture<AnimalFavDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalFavDialogComponent]
    });
    fixture = TestBed.createComponent(AnimalFavDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
