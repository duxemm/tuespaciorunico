import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAmpliaComponent } from './consulta-amplia.component';

describe('ConsultaAmpliaComponent', () => {
  let component: ConsultaAmpliaComponent;
  let fixture: ComponentFixture<ConsultaAmpliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAmpliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaAmpliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
