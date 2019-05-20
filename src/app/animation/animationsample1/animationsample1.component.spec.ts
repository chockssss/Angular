import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animationsample1Component } from './animationsample1.component';

describe('Animationsample1Component', () => {
  let component: Animationsample1Component;
  let fixture: ComponentFixture<Animationsample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animationsample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animationsample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
