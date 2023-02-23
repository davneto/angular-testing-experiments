import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitEx2Component } from './unit-ex2.component';

describe('UnitEx2Component', () => {
  let component: UnitEx2Component;
  let fixture: ComponentFixture<UnitEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitEx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
