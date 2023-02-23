import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitEx1Component } from './unit-ex1.component';

describe('UnitEx1Component', () => {
  let component: UnitEx1Component;
  let fixture: ComponentFixture<UnitEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitEx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
