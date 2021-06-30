import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTopmenuComponent } from './edit-topmenu.component';

describe('EditTopmenuComponent', () => {
  let component: EditTopmenuComponent;
  let fixture: ComponentFixture<EditTopmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTopmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
