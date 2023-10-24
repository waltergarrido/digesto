import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCargaComponent } from './form-carga.component';

describe('FormCargaComponent', () => {
  let component: FormCargaComponent;
  let fixture: ComponentFixture<FormCargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCargaComponent]
    });
    fixture = TestBed.createComponent(FormCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
