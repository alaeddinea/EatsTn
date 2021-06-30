import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddRestaurantComponent } from './add-restaurant.component';

describe('AddRestaurantComponent', () => {
  let component: AddRestaurantComponent;
  let fixture: ComponentFixture<AddRestaurantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
