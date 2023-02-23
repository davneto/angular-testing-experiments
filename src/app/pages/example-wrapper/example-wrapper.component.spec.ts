import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleWrapperComponent } from './example-wrapper.component';

describe('ExampleWrapperComponent', () => {
  let component: ExampleWrapperComponent;
  let fixture: ComponentFixture<ExampleWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
