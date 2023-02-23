import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eEx1Component } from './e2e-ex1.component';

describe('E2eEx1Component', () => {
  let component: E2eEx1Component;
  let fixture: ComponentFixture<E2eEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E2eEx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E2eEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
