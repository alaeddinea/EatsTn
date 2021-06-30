import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionProfessionalComponent } from './inscription-professional.component';

describe('InscriptionProfessionalComponent', () => {
  let component: InscriptionProfessionalComponent;
  let fixture: ComponentFixture<InscriptionProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
