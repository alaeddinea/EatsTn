import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestaurantsComponent } from './new-restaurants.component';

describe('NewRestaurantsComponent', () => {
  let component: NewRestaurantsComponent;
  let fixture: ComponentFixture<NewRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
