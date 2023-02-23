import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eEx2Component } from './e2e-ex2.component';

describe('E2eEx2Component', () => {
  let component: E2eEx2Component;
  let fixture: ComponentFixture<E2eEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E2eEx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E2eEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
