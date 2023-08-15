import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticUsersComponent } from './static-users.component';

describe('StaticUsersComponent', () => {
  let component: StaticUsersComponent;
  let fixture: ComponentFixture<StaticUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticUsersComponent]
    });
    fixture = TestBed.createComponent(StaticUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
