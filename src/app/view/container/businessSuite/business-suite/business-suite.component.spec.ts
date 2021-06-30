import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSuiteComponent } from './business-suite.component';

describe('BusinessSuiteComponent', () => {
  let component: BusinessSuiteComponent;
  let fixture: ComponentFixture<BusinessSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessSuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
