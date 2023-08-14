import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserReactiveComponent } from './add-user-reactive.component';

describe('AddUserReactiveComponent', () => {
  let component: AddUserReactiveComponent;
  let fixture: ComponentFixture<AddUserReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserReactiveComponent]
    });
    fixture = TestBed.createComponent(AddUserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
