import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmenusearchComponent } from './listmenusearch.component';

describe('ListmenusearchComponent', () => {
  let component: ListmenusearchComponent;
  let fixture: ComponentFixture<ListmenusearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmenusearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmenusearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
