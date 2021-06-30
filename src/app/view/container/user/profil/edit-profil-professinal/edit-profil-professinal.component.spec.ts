import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilProfessinalComponent } from './edit-profil-professinal.component';

describe('EditProfilProfessinalComponent', () => {
  let component: EditProfilProfessinalComponent;
  let fixture: ComponentFixture<EditProfilProfessinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfilProfessinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilProfessinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
