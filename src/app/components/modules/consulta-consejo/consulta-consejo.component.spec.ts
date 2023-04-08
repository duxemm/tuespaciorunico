import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaConsejoComponent } from './consulta-consejo.component';

describe('ConsultaConsejoComponent', () => {
  let component: ConsultaConsejoComponent;
  let fixture: ComponentFixture<ConsultaConsejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaConsejoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
