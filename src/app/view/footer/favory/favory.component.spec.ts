import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoryComponent } from './favory.component';

describe('FavoryComponent', () => {
  let component: FavoryComponent;
  let fixture: ComponentFixture<FavoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
