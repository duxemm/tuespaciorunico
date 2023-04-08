import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProfundaComponent } from './consulta-profunda.component';

describe('ConsultaProfundaComponent', () => {
  let component: ConsultaProfundaComponent;
  let fixture: ComponentFixture<ConsultaProfundaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaProfundaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaProfundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
