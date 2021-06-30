import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopmenuComponent } from './list-topmenu.component';

describe('ListTopmenuComponent', () => {
  let component: ListTopmenuComponent;
  let fixture: ComponentFixture<ListTopmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
