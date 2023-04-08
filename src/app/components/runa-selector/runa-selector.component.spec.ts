import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunaSelectorComponent } from './runa-selector.component';

describe('RunaSelectorComponent', () => {
  let component: RunaSelectorComponent;
  let fixture: ComponentFixture<RunaSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunaSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
