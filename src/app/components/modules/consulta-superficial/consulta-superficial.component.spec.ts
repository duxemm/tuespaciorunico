import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSuperficialComponent } from './consulta-superficial.component';

describe('ConsultaSuperficialComponent', () => {
  let component: ConsultaSuperficialComponent;
  let fixture: ComponentFixture<ConsultaSuperficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSuperficialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSuperficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
